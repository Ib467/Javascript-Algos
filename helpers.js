// Idea from the last code snippet in https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781
  // Original from src:
    // const makeUpdater = apply => key => state => ({ [key]: apply(state[key]), });
      /* 
        Not as flexible as below versions. Can only be used to change one key.
        Doesn't allow for:
          - additional parameters for more complex updaters to be made
          - adding new keys and/or changing multiple keys together
          - changing nested obj key values
      */ 

/* 
  this.state should not be relied upon for calculating new state because setState is async so you risk accessing the value of this.state
  before a queued update. This problem is averted by passing setState a function which it will call and pass the current state and props to.
  Explanation with toggleKey as example:
      1. makeUpdater is passed one arg `apply`, which is a function
      2. makeUpdater returns a fn to the const `toggleKey`, this returned fn can accept any number of args
      3. When `toggleKey` is called, another fn is returned which is the fn that setState will use as a callback
      4. setState invokes the callback and passes the current state as an arg
      5. the setState callback calls `apply` and passes the current state and all of the args passed to the toggleKey fn,
        in this case, only a key name because state is not passed in by you when you call `toggleKey`, setState passes in state when it invokes the callback
      6. The `apply` fn returns a new object with the provided `key`, the value of which is the opposite of the
        current value of that key on the current state object
      
 */

// apply needs to return the new state obj
const makeUpdater = (apply) => (...rest) => (state) => {
  return apply(state, ...rest);
}

const makeUpdaterWithProps = (apply) => (...rest) => (state, props) => {
  return apply(state, props, ...rest);
}

// examples (works with single key or a path using dot and/or bracket notation):
// An updater fn can be also be made to update multiple keys, each key/keyPath could be copied
  // and updated and then the copied objects merged

// usage:
  // this.setState(toggleKey('clicked'));
  // this.setState(toggleKey('nestedObj.clicked'));
  // this.setState(toggleKey('nestedObj[clicked]'));
export const toggleKey = makeUpdater(
  (prevState, keyPath) => copyObjPath(prevState, keyPath, prev => !prev)
);

// usage: this.setState(incrementKeyByProp('nestedObj.counter', 'step'));
export const incrementKeyByProp = makeUpdaterWithProps(
  (prevState, props, keyPath, prop) => copyObjPath(prevState, keyPath, prev => prev + props[prop])
);

// usage:
  // this.setState(concatKey('classList', 'text-success'));
  // this.setState(concatKey('nestedObj.items', newItem));
  // this.setState(concatKey('[nested-obj].items', ['items', 'to', 'concat']));
  // this.setState(concatKey('[nested-obj][items]', [['add', 'an', 'arr']]));
export const concatKey = makeUpdater(
  (prevState, keyPath, add) => copyObjPath(prevState, keyPath, prevArr => prevArr.concat(add))
);

// usage:
  // this.setState(spliceKey('nestedObj.users', 0, 1, [{name: 'neil'}, {name: 'ryan'}]));
  // this.setState(spliceKey('nestedObj[users]', prevArr => prevArr.findIndex(user => user.name === 'ryan'), 1));
  // this.setState(spliceKey('nestedObj[users]', -1, 1, [], false));
export const spliceKey = makeUpdater((prevState, keyPath, startIdx, delCnt, insertItems = [], ignoreNegativeOne = true) => {

  const statePathCopy = copyObjPath(prevState, keyPath, prevArr => { // callback to return new value, prevArr ref broken via copyObjPath

    let idx = checkObjType(startIdx, 'Function') ? startIdx(prevArr) : startIdx;

    if (ignoreNegativeOne && idx === -1) return prevArr;
    else prevArr.splice(idx, delCnt, ...insertItems); return prevArr
  });
  return statePathCopy;
});



// examples (doesn't support nested keys):

// usage: this.setState(toggleKey('clicked'));
export const toggleKey = makeUpdater(
  (prevState, key) => ({ [key]: !prevState[key], })
);

// usage: this.setState(incrementKeyByProp('counter', 'step'));
export const incrementKeyByProp = makeUpdaterWithProps(
  (prevState, props, key, prop) => ({ [key]: prevState[key] + props[prop], })
);

// usage:
  // this.setState(concatKey('classList', 'text-success'));
  // this.setState(concatKey('items', newItem));
  // this.setState(concatKey('items', ['items', 'to', 'concat']));
  // this.setState(concatKey('items', [['add', 'an', 'arr']]));
export const concatKey = makeUpdater(
  (prevState, key, add) => ({ [key]: prevState[key].concat(add), })
);

// usage:
  // this.setState(spliceKey('users', 0, 1, [{name: 'neil'}, {name: 'ryan'}]));
  // this.setState(spliceKey('users', prevArr => prevArr.findIndex(user => user.name === 'ryan'), 1));
  // this.setState(spliceKey('nestedObj.users', -1, 1, [], false));
export const spliceKey = makeUpdater((prevState, key, startIdx, delCnt, insertItems = [], ignoreNegativeOne = true) => {

  const newArr = prevState[key].slice();

  let idx = typeof (startIdx) === 'function' ? startIdx(newArr) : startIdx;

  if (ignoreNegativeOne && idx === -1)
    return newArr;
  else
    newArr.splice(idx, delCnt, ...insertItems);

  return { [key]: newArr, };
});

export const splitKeyPath = (path) => Array.isArray(path) ? path : typeof (path) === 'string' ? path.split(/[\\\[\\\].]/).filter(Boolean) : [];

export function checkObjType(o, typeCheck) {
  const type = Object.prototype.toString.call(o);
  if (typeCheck) return type === `[object ${typeCheck}]`;
  else return type;
}

// returns obj with the specified keyPath and it's respective values with references along the path broken
// setState will merge all the other key value pairs
// setState does not merge missing key value pairs in nested objects, 
  // this is why nested objects are spread instead of only the path key being copied
export function copyObjPath(o, keyPath, newPathVal) {

  let copy = {};
  const keys = splitKeyPath(keyPath);
  copy[keys[0]] = o[keys[0]];

  keys.reduce((prev, curr, i) => {

    if (prev && prev[curr] !== undefined) {

      let type = checkObjType(prev[curr]);

      if (type === '[object Object]') prev[curr] = { ...prev[curr] };
      else if (type === '[object Array]') prev[curr] = [...prev[curr]];

      if (i === keys.length - 1 && newPathVal)
        prev[curr] = checkObjType(newPathVal, 'Function') ? newPathVal(prev[curr]) : newPathVal;
      return prev[curr];

    } else copy = null; return null; // setState cancels if it receives null
  }, copy);
  return copy;
}
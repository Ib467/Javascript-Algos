/**
 * Least Recently Used Cache
 * each cache has a capacity
 * when that capacity is reached, the least recently accessed key/value pair
 * must be flushed to add a new one
 * keep track of when things are accessed to determine when they should be flushed
 * adding, updating, or getting all count as accessing
 */

class LRUCache {
    constructor(capacity) {
      // your code here
      this.count = 0;
      this.capacity = capacity;
      //Least recently used will be at back of the array
      this.items = [];
    }
  
    /**
     * @param {string} key the key to find
     * returns either the value or -1 if not present
     */
    get(key) {
      // your code here
      const index=this.findIndex(key);
      if(index < 0) return -1;
      return this.items[index][key];
    }
  
    findIndex(key){
        //Loop through the array and return the index of the key
      for(let i=0; i<this.items.length; i++){
        if(this.items[i].hasOwnProperty(key)){
            return i;
        }
      }
      return -1;
    }

    /**
     * @param {string} key the key connected to the value
     * @param {any} val the value to either add or update (if already present)
     */
    //use unshift to add to front
    put(key, val) {
      // your code here
      if(this.get(key) > 0){
          //update the value
          const index = this.findIndex(key);
          this.items[index][key] = val;
          //move it to the front
          const item = this.items.splice(index,1);
          this.items.unshift(item);
      }
      else if(this.count < this.capacity){
          //add item to the front
          this.count++;
          this.items.unshift({[key]:val});
      }else{
          //Remove the least recently used
          //Add item to the front
          this.items.pop();
          this.items.unshift({[key]:val});
      }
      console.log(this.items);
    }
  }
  
  const cache = new LRUCache(2); // new cache with capacity of 2
  
  cache.put('key1', 'val1');
  cache.put('key2', 'val2');
  cache.put('key3', 'val3');
  
  console.log(cache.get('key4')); // should log -1, not yet added
  console.log(cache.get('key1')); // should log -1, as it's been flushed
  
  console.log(cache.get('key3')); // should log 'val3'
  cache.put('key4', 'val4');
  
  console.log(cache.get('key2')); // should log -1, as it's been flushed
  console.log(cache.get('key4')); // should log 'val4'

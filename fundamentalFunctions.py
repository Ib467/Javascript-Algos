# Create a function iterateDict (keyName, list) that given a list of dictionaries 
# and a key name, the function prints the value


employees = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'French'},
    {'first_name': 'Kobe', 'last_name': 'Bryant'},
    {'first_name': 'Michael', 'last_name': 'jordan'}
]

def iterateDict(keyName, list):
    for employee in list:
        print(employee)

iterateDict('first_name', employees)
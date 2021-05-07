## About the app

The app is built in node with mocha for unit testing.

The app itself is a module which can be required as needed. It can also be run from the terminal in node by running `node . -a=[array] -s=[size]` (Where Array is the array parameter you pass into the function, and size is the number of arrays it should be split into). 

For example from the root directory, you can call the function as so: `node . -a=1 2 3 4 5 -s=3`.

### Error handling

The app throws an exception for instances where:

Either arguments for the function are missing.

The value of the size argument is less than 0.


### Tests
Tests can br run by running `npm run test`

### Notes
I haven't put comments in the code as I hope it's easy enough to understand without the need for comments

# homework-4-js

## Important: You shouldn't use global variables

#### 1) Write `largest` and `smallest` functions that returns the largest and smallest number passed like a argument.

##### Example:
`largest(2, 0.1, -5, 100, 3) // 100`  
`smallest(2, 0.1, -5, 100, 3) // -5`  

#### 2) Write function `transform` that will transform array of numbers to array of functions that will return value from a base array.

##### Example:
`const baseArray = [10, 20, 30, 40, 50];`  
`const newArray = transform(baseArray);`  
`newArray[3](); // should return 40`  
`newArray[4](); // should return 50`  

#### 3) Write function `sum`. Function expects arbitrary number of digit arguments and returns compound value of them.  
Note: function should use recursion

##### Example:
`sum(1,3,5,7); //should return 16`  

#### 4) Write function `countDown`. Function expects number and logs values one by one till zero with one second delay.

#### Example:  
`countDown(3); // 3 2 1 0`   

#### 5) Write a polyfill for a .bind() function and save it in `Function.prototype.myBind()`. `myBind()` should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.   
Hint: play with the function in Function.prototype and see what this points to inside it.
Your code should look like:
`Function.prototype.myBind = function () { `  
`  // your code here `  
`}`  

### Example:
`function addPropToNumber(number) { return this.prop + number; }`  
`var bound = addPropToNumber.myBind({ prop: 9 });`  
`bound(1)  // 10`  

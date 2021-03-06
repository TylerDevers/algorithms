Audio()
setTimeout()
clearInterval()
setInterval()
newDate()
delete
pop()
shift()
test()
sort
splice
Math.round
Math.floor
includes()
Array.from
match
isNaN
indexOf
arguments
String.fromCharCode
Math.pow
forEach
Array.isArray
concat
apply
filter
includes
reduce
replace
split
slice
regExp

addEventListener()
	addEventListener will target an element and trigger a function when an event happens, such as mouse interaction or tabbing into a field.
	
	var pointer = document.getElementsByClassName('modifier');

	pointer.addEventListener("mouseover", function (event) {
		event.target.style.color = "yellow";
	}, false);
	
Audio()
	the Audio constructor will create an audio element. Remeber to use new with constructors and it needsto be assigned to a variable. the audio will continue to be played until stop() is called.
		var audio = new Audio('audio_file.mp3' or 'url');
		audio.play(); // note the variable must have the play method called on it.
		stop(audio); //this will stop the audio element from playing
	
setTimeout()
	setTimeout(function, milliseconds) will call a function after the desired milliseconds have passed.
	just like setInterval, it can be canceled with a clearTimeout(setTimeoutID)
	
clearInterval()
	clearInterval(intervalID) calling clear interval will stop the desired setInterval.
	
setInterval()
	setInterval(function, milliseconds) will call a function every specified milliseconds. it will continue to do so until clearinterval() is called. when using setInterval, assign it to a variable to 
	make clearingInterval easier.
	
newDate()
	new date will get the current date. 
	.getTime()
			the get tiem method can be called on a date object to get the current time in milliseconds.
			
delete
//the delete opereator can be used to delete an expression. when used on an array, it will 
//replace the element with undefined and will not change the length.
    var trees = ["redwood","bay","cedar","oak","maple"];
    delete trees[3];

pop()
the pop method removes the last element from an array and returns that element.

shift()
the shift method removes the first element of an array, shortening the length of the array.

test()
regex.test() - the test method will test a regexp, checking for a match between a string the regex
it returns true or false.

sort()
the sort method will sort alphabetically, numerically, or according to unicode. it will take a function
if needed.
        var fruit = ['cherries', 'apples', 'bananas'];
        fruit.sort(); // ['apples', 'bananas', 'cherries']
        //here is a possible function for sort.
        function compare(a, b) {
          if (a is less than b by some ordering criterion) {
            return -1;
          }
          if (a is greater than b by the ordering criterion) {
            return 1;
          }
          // a must be equal to b
          return 0;
        }

splice() 
the splice method will change the content of an array, deleting and/or adding items,
        var myFish = ["angel", "clown", "mandarin", "surgeon"];
        myFish.splice(2, 0, "drum"); 

        // myFish is ["angel", "clown", "drum", "mandarin", "surgeon"]
        array.splice(start)
        array.splice(start, deleteCount)
        array.splice(start, deleteCount, item1, item2, ...)

every() 
the every method tests whether all elements in the array pass the test implemented by the provided function. Note that it stops iterating as soon as it returns false, so all elements may not be tested

        function isBigEnough(element, index, array) { 
          return element >= 10; 
        } 

        [12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true

Math.round()
this will return a number rounded to the nearest integer.

Math.floor()
floor will cut off the decimal, or truncate the decimal.

includes()
the includes method will check whether an array contains a certain element. returns true/false
        [1,2,3].includes(3) //returns true
        
Array.from()
the Array.from() function will make an array out of array like objects, that is, objects that can be 
iterated over like strings, arrays, arguments, etc.
        var arr = Array.from(arguments);
match()
string.match(regex) method will match a string against a regex
isNaN()
the isNaN() function determines whether a value is Not a Number, NaN, or not. returning true or false.
        isNaN("t"); //false
        
indexOf
indexOf method will return the index value for the specified character. It will return 
-1 if the value is not found. works with strings and arrays
        arr.indexOf("this");
arguments
arguments is a local variable that is available to functions. arguments can be c
called with bracket notation to access the arguments given when the function is called
arguments are not arrays, arguments are objects. arguments can be turned into arrays with .from()
        arguments[0]  // this will call the first arguments
        var arr = Array.from(arguments);
        
String.fromCharCode()
fromCharCode will take a number and return a given unicode character that matches that value
        String.fromCharCode(65, 66, 67);  // "ABC"

Math.pow(a,b)
.pow will calculate a to the power of b

forEach method
.forEach() iterates over an array, and executes the provided function once per element in the array.

Array.isArray method
Array.isArray(objName) method will test inputted value for type array, returning true or false
        Array.isArray([1, 2, 3]);  // true

concat method
.concat() will merge two arrays, returning a new array.
        //below will combine two arrays
        var arr1 = ["a", "b", "c"];
        var arr2 = ["d", "e", "f"];

        arr1.concat(arr2);
        // results in a new array [ "a", "b", "c", "d", "e", "f" ]
        //below will flatten the array, keeping the values but removing the nested arrays
        var arrays = [["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"]];
        var merged = [].concat.apply([], arrays);

apply method

reduce method
.reduce() applies a function to an array to reduce the array to a single value.
reduce acts as an accumulator without needed a counter variable, simply return the value within
the function.
        //finds accumulated value of sum
        var sum = [0, 1, 2, 3].reduce(function(a, b) {
          return a + b;
        }, 0);
        // sum is 6
        
        //removes nested arrays, leaving just one array of values
        var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) { 
          return a.concat(b);
        }, []);
        // flattened is [0, 1, 2, 3, 4, 5]
        
filter method
.filter() returns an array off all elements that pass a given function.
        function isBigEnough(value) {
          return value >= 10;
        }

        var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

map method
.map() iterates over an array and makes a new array. it can take element, index, array as arguments
        .map(function(element, index, array) {});

slice()
also used on arrays.
slice method will 'slice' out a section of a string using a start and stop parameters, stop is optional
//this example will begin at index start and end before (not including) stop
myString.slice(start, stop); 
        var a = ["zero", "one", "two", "three"];
        var sliced = a.slice(1,3);

        console.log(a);      // [ "zero", "one", "two", "three" ]
        console.log(sliced); // [ "one", "two" ]


substring()
substring method will do the same as slice, using a start and stop parameter, stop is optional
//this example will begin at index start and end before (not including) stop
myString(start, stop);

substr()
substr method is like substring, except it uses a start parameter and a length parameter, length is optional
//this example will begin at index start and slice out the specified length of string characters
substr(start, length);

replace()
replace method will return a new string after replacing some or all of a matching pattern
regex can be used as the parameter as well as another string.
	//example replaces Xmas with Christmas, using a regExp.
	var str = 'Twas the night before Xmas...';
	var newstr = str.replace(/xmas/i, 'Christmas');
	console.log(newstr);  // Twas the night before Christmas...
	
includes()
includes method will search a string/array for another string and return true or false. It is case sensitive
	'Blue Whale'.includes('blue'); // returns false, because includes() is case sensitive
	try using regex with flags to ignore case
	
regExp()
regExp is a`constructor. regExp creats a regular expression object for matching text with pattern.
multiple regex expressions are seperated by the pipe |
        newStr = str.replace(/\s|-|\(|\)/g,"");
        // note that the empty regex looks like (/ /, ), \s is for spaces, then - , (, ). g flag makes
        //it global, meaning it will replace all occurances of the noted items
        //note the escape character \ , this slash tells regex that special characters are not special,
        // hence I need it to match the literal parenthesis
        new regExp(regEx pattern, flags); // flags are chars that provide extra flitering example, i flag ignores case.
use regexp as paramaters for methods like replace() ans split()



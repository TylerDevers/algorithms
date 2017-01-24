
var Person = function (firstAndLast) {
    var name = firstAndLast;
    var nameArr = firstAndLast.split(' '), firstName = nameArr[0], lastName = nameArr[1];
    
    this.getFirstName = function () {        
        console.log(firstName);
        return firstName;
    };
    this.getLastName = function () {
        console.log(lastName);
        return lastName;
    };
    this.getFullName = function () {
        console.log(name);
        return name;        
    };
    this.setFirstName = function (first) {
        firstName = first;
    };
    this.setLastName = function (last) {
        lastName = last;
    };
    this.setFullName = function (firstAndLast) {
        name = firstAndLast;
    };
    this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
bob.getLastName();

/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model
Run tests (ctrl + enter)
  Reset	  Help	  Bug

TypeError: bob.getFullName is not a function
*/


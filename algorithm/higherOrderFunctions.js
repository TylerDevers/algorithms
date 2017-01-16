Functional programming 

functional programming is quicker, with less bugs

higher order functions - functions are values in JS. This means that functions can be assigned to variables.
higher order functions are good for composition/callback - putting functions within functions; 
	filter() is a function on array that accepts another function.
	filter will loop through each item in the array and pass each item to the callback function.
	filter throws away elements, and return true and false
	
	var dogs = animals.filter(function(animal) {
		return animals.species === "dog";
	})
	
higher order functions are coupling functions together. that is, functions that call other functions.

map method 

	var names = animals.map(function(animal) {
			return animal.name;
		})
		this will return an array of the names in the animal array
		
reduce() method
reduce will fit aany list transformation. it takes two arguments

map method maps each value of array and returns new array of elements.

reduce goes through elements in the array and reduces the elements to a single value.
	numArr.reduce(function(sum, n ){
		return sum + n;
		});

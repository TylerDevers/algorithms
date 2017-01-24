
function orbitalPeriod(arr) {
    
    var result = []; //store new objects here.
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    //new object constructor to add final objects to array.
    /*function Period(avgAlt) {
        this.name = name;
        this.avgAlt = orbitalPeriod(avgAlt);
    }*/
    
    //helper function that returns orbital period when given a height
    function orbitalPeriod(height) {
        //orbital period (T) = 2pi * sqrt((radius + height)^3 / GM)
        var op = (2*Math.PI) * (Math.sqrt(Math.pow((earthRadius + height), 3)/GM));
        return Math.round(op);
    }
    
    //iterate over arr creating new Period object and adding it to result array as we go
    for (var i = 0; i < arr.length; i++) {
        result[i] = {
            name: arr[i].name,
            orbitalPeriod: orbitalPeriod(arr[i].avgAlt)
        };
    }
    
    console.log(result);
    return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

 orbital period (T) = 2pi * sqrt((radius + height)^3 / GM)
 
 time = d/(v)elocity
    where distance(d) = 2pi(radius + (h)ieght)
GM is the standard gravitational parameter in m3/s2
Math.pow()
Run tests (ctrl + enter)
  Reset	  Help	  Bug

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/
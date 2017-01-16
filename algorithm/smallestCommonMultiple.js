//checks if num is prime
function isPrime(num) {
    var prime = true,
        div = 2;
	// if num%div returns zero at any time, prime is set to false.
    while (prime === true && div !== num) {
        if (num % div === 0) {
            prime = false;
        }
        div++;
    }

    return prime;
}

// pushes missing numbers to array, and returns array
function getSequencialNumbers(start, end) {
    var numbers = [];

    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getLCM(numbers) {
    var found = false,
        count,
        notDivisible,
        divisor = 2,
        multiples = [],
        lcm;

    while (!found) {
        if (!isPrime(divisor)) {
            divisor++;
            continue;
        }

        count = 0;
        notDivisible = 0;
        numbers = numbers.map(function(val) {
            if (val === 1) {
                count++;
            }

            if (val % divisor === 0) {
                return val / divisor;
            } else {
                notDivisible++;
            }

            return val;
        });

        if (count === numbers.length) {
            found = true;
        } else if (notDivisible === numbers.length) {
            divisor++;
        } else {
            multiples.push(divisor);
        }
    }

    lcm = multiples.reduce(function(prev, curr) {
        return prev * curr;
    });

    return lcm;
}

function smallestCommons(arr) {
    var start = Math.min.apply(null, arr),
        end = Math.max.apply(null, arr),
        divisors = getSequencialNumbers(start, end);

    return getLCM(divisors);
}

smallestCommons([1, 5]);

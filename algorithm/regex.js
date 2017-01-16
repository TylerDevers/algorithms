//the parts of regex
var chars = 'string';
chars.match(/407 | 321/) // the pipe symbol |, means or. this regex will search 407 or 321

chars.match(/ar+/) // the plus operator will match a single 'r' or multiple 'r's, until there is 
//a break in the 'r' pattern. This would return ar, arr, arrrr, arrrrrr etc, until the r stop repeating
//but what if we need to match all letters?
chars.match(/[a-z]/)  // this pattern is a set, as noted by the square brackets. a set takes a range.
//in this case, the range is all lowercase letters between 'a' and 'z'. Note this will only mach the 
//first character of the string. 
chars.match(/[a-t]r[e-z][a-z]/); //note that each range will check only the coorsponding string character
//[a-t] will check index 0, r will check index 1, etc
//to include all characters in the string add the plus operator.
  chars.match(/[a-z]+/); // this will run the pattern over all characters in the string
  chars.match(/[a-z]+/i); // the i modifier will ignore case when matching. this will match all alphabet
  //characters unless a white space is found, then it will only give a partial match.
  chars.match(/[a-z\s]+/); //the \s (backslash s meta character) will match all white spaces  
  chars.match(/[a-z\s0-9]+/i);// this will now also include numbers in the range
  
chars.match(/\w+/); // \w is the word metacharacter, and it is the same as /[a-z0-9]+/i pattern.
// \w matches one word like character
chars.match(/\w\s/); // this will check for words and spaces.

var email = 'tyler@example.com';
email.match(/\w+@\w+/); // this could validate emails.it will match wordlike characters up, which stops 
//at the @ sign, then looks matches @, then matches word like characters again. This will stop at the 
//period in the .com
var email = 'tyler@example.com';
email.match(/\w+@\w+.\w+/); // this will match all of the email, but it will cause errors. the . dot is
// a special wildcard and will match ALL characters. we must escape it to work correctly.
var email = 'tyler@example.com';
email.match(/\w+@\w+\.\w+/);// this is the correct pattern to escape the dot and validate the email.
var email = 'tyler@example.com';
email.match(/\w+@\w+\.(com|net)/);// use parenthesis, just like in math order of operation, to group 
//patterns together. this code will check the initial patterns first, and the parenthesis last. without
//the parenthesis, the com and net may be checked first, yielding a partial match.

(/^learnbydoing$/);// enter the anchor tag! the carrot ^ marks the beginning of the search, the dollar
// sign marks the end of the search. this removes the possibilties of a partial match.
var email = 'tyler@example.com';
email.match(/\b\w+/); // the \b boundary metacharacter is used to match whole words. it acts as an achor
// like ^ and $, and it will match word characters up to non word characters, such as space or dot.
/ship?/; // the question mark operator makes the character before it optional. in this case, the p becomes optional. it can be used with groups as well /(ship)?/ makes 'ship' optional
/ok(ay)/i; //this will match both 'ok' and 'okay' by grouping the ay with the ? meta character 
/\b(ok|sure)\b/i; //to apply the boundary metacharacter to all "or" statements, simply include the or
//or statements within parenthesis. This will limit the or statements to match whole words only.
/^[^\d]+$/; //when the hat/carrot is placed within a set, its meaning changes to "not", the \d 
//metacharacter means any number, so the hat changes this to mean anything thatis not a number.
// \d is the digit metacharacter. this is the same as /^\D+$/
/^\D+$/; //is is an alternate way to write the above. th capital D makes it opposite. 
/^\D+{20,40}$/; // using upper case version of the digit metacharacter will return the opposite function 
// of the metacharacter. in this case, instead of matching all numbers, it will match all non numbers,
//including spaces, dots, commas, etc. the curly braces {} is interval notation. {minimum, maximum}
//it defines the minimum numbers of characters and the max number of characters
/penguin/ig; //the g is the global modifier. without it, only the first instance of penguin will be 
//matched. Using the global modifier, ALL instances of penguin will be matched.

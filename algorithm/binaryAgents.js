//uses split, forEach, fromCharCode
//Multiply each binary digit by two to the power of its place number. Remember, binary is read from right to left. The rightmost place number being zero.

function binaryAgent(str) {
  //change string to array
  var arr = str.split(' ');
  var transArr = [];
  var addValue = [128,64,32,16,8,4,2,1];
  
  //split elements of arr into array as well for iterating
  for (var i =0; i<arr.length; i++){
    arr[i] = arr[i].split("");
  }
  //find accumalated value of binary 8 bit code, push it to transArr
  arr.forEach(function(binary){
    var counter = 0;
    for (var x = 0; x<binary.length; x++){
      counter += binary[x] * addValue[x];  
    }
    transArr.push(counter);
  });
  //change numbers to characters, and join 
  for (var y= 0; y<transArr.length; y++){
    transArr[y] = String.fromCharCode(transArr[y]);
  }
  str = transArr.join(""); 
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//Multiply each binary digit by two to the power of its place number. 
//Remember, binary is read from right to left. The rightmost place number being zero.

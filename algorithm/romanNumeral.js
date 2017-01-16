function convertToRoman(num) {
  //reverse number, split to array, use index as place value, replace with letters. o inex will be ones position
  var numerals = {ones: {
    1:"I",2:"II",3:"III",4:"IV",5:"V",
    6:"VI",7:"VII",8:"VIII",9:"IX"
  },
  tens:{
    1:"X",2:"XX",3:"XXX",4:"XL",5:"L",
    6:"LX",7:"LXX",8:"LXXX",9:"XC"
  },
  hundreds:{
    1:"C",2:"CC",3:"CCC",4:"CD",5:"D",
    6:"DC",7:"DCC",8:"DCCC",9:"CM"
  },
  thousands:{
    1:"M",2:"MM",3:"MMM",4:"MMMM",5:"MMMMM",
    6:"MMMMMM",7:"MMMMMMM",8:"MMMMMMMM",9:"MMMMMMMMM"
  }};
  var romanNumeral = "";
  var input = num.toString();
  var numArr = input.split("");
  numArr.reverse();
  // iterate and change values
  for (var i = 0; i <numArr.length; i++){
      if (i == 0){
        console.log(numArr[i]);
        numArr[i] = numerals.ones[numArr[i]];
      } else if (i == 1){
        console.log(numArr[i]);
        numArr[i] = numerals.tens[numArr[i]];
      } else if (i==2){
        console.log(numArr[i]);
        numArr[i] = numerals.hundreds[numArr[i]];
      } else if (i==3){
        console.log(numArr[i]);
        numArr[i] = numerals.thousands[numArr[i]];
      }
  }
  numArr.reverse();
  romanNumeral = numArr.join('');
  console.log(romanNumeral);
}

convertToRoman(36);

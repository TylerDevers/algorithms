function pairElement(str) {
  //A always pairs with T, C always pairs with G
  var arr =[];
  var basePairs = [['A','T'],['T','A'], ['G','C'],['C','G']];
  for (var i = 0; i < str.length; i++){
      if (str[i] == "A"){
        arr[i] = basePairs[0];
      } else if (str[i] == "T"){
        arr[i] = basePairs[1];
      } else if (str[i] == "G"){
        arr[i] = basePairs[2];
      } else if (str[i] == "C"){
        arr[i] = basePairs[3];
      }
  }
  //note: this code return s 'circular object array at js bin
  return arr;
 }

pairElement("GCG");

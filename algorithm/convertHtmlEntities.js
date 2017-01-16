// uses includes() and replace()
//replaces special characters with their html counterparts
function convertHTML(str) {
  // &colon;&rpar;
  var newStr ="";
  for (var i = 2; i > 0; i--){
    if (str.includes(" & ")){
      str = str.replace("&","&amp;");
    }
    if (str.includes(" < ")){
      str = str.replace("<","&lt;");
    }
    if (str.includes(" > ")){
      str = str.replace(">","&gt;");
    }
    if (str.includes('"')){
      str = str.replace('"','&quot;');
    }
    if (str.includes("'")){
      str = str.replace("'","&apos;");
    }
    if (str.includes("<>")){
      str = str.replace("<>", "&lt;&gt;");
    }
}
  return str;
}

convertHTML("Dolce & Gabbana");

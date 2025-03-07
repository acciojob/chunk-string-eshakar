function stringChop(str, size) {
  // your code here  
	if (!str) {
    return [];
  }

  let resultArray = [];

  while (str.length > 0) {

    if (str.length > size) {
 
      resultArray.push(str.substring(0, size));
   
      str = str.substring(size);
    } else {
      
      resultArray.push(str);
      str = '';
    }
  }

  return resultArray;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  text = text.toLowerCase();
  const charCount = new Set();
  for (var i = 0; i<text.length; i++){
      if(charCount.has(text[i])){
          return false;
      }else{
          charCount.add(text[i]);
      }
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (text.length === charCount.size){
      return true;
  }
  return false;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
    if (actual === expected)
    {
        console.log('passed')
    }else{
        console.log("FAILED ["+ testName +"] Expected \"" + expected + "\", but got \"" + actual + "\"");
    }
}
// TESTS CASES
var word = "reign";
var expected1 = true;
var actual1 = isIsogram(word);
assertEqual(actual1, expected1, "should return true");

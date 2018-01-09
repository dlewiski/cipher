/*var str1 = prompt("Please type a sentance: ");

alert(str1);

var firstLetter = str1.charAt(0);

alert(firstLetter.toUpperCase());


var lastLetter = str1.slice(-1);

alert(lastLetter.toUpperCase());

var strLength = str1.length;

strLength -= 2;

alert(strLength);

var partStr = str1.substr(1, strLength);

alert(partStr);
*/

var sentence = prompt("Please type a sentence: ");

var partStr = function(str1, strLength, prtStr) {
  strLength = (str1.length);
  strLength -= 2;
  prtStr = str1.substr(1, strLength);
  return(prtStr);
};

var middleStr = partStr(sentence);
alert(middleStr);

/*
var capitol = function(str1, firstLetter, lastLetter, prtStr, strLength){
  var firstLetter = str1.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  var lastLetter = str1.slice(-1);
  lastLetter = lastLetter.toUpperCase();
  strLength = (str1.length);
  strLength -= 2;
  prtStr = str1.substr(1, strLength);
  alert(firstLetter + prtStr + lastLetter);
};

capitol(sentence);

var arrange = function(str1, firstLetter, lastLetter, strLength, prtStr) {

var firstLetter = str1.charAt(0);
  alert(firstLetter.toUpperCase());
var lastLetter = str1.slice(-1);
  alert(lastLetter.toUpperCase());
var strLength = (str1.length);
  alert(strLength -= 2);
var prtStr = str1.substr(1, strLength);

alert(lastLetter + prtStr + firstLetter);
};

arrange(sentence);
*/

var letter1 = function(str1, firstLetter) {
  var firstLetter = str1.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  return(firstLetter);
};
//alert(letter1(sentence));

var letter2 = function(str1, lastLetter) {
  var lastLetter = str1.slice(-1);
  lastLetter = lastLetter.toUpperCase();
  return(lastLetter);
};

var reArrange = function(str1){
alert(letter2(str1) + letter1(str1));
alert(str1 + letter1(str1) + letter2(str1));
};
reArrange(sentence);

var strCount = function(str1, nOfLetters, count, newLetter){
  nOfLetters = (str1.length);
  //alert(nOfLetters);
  count = parseInt(nOfLetters / 2);
  //alert(count);
  newLetter = str1.charAt(count);
  alert(newLetter + str1 + letter2(str1) + letter1(str1));
};
strCount(sentence);

var reverseStrCount = function(str1, nOfLetters, count, newLetter){
  nOfLetters = (str1.length);
  //alert(nOfLetters);
  count = parseInt(nOfLetters / 2);
  //alert(count);
  newLetter = str1.charAt(count);
  alert(letter1(str1) + letter2(str1) + str1 + newLetter);
};
reverseStrCount(sentence);

var str1 = prompt("Please type a sentance: ");

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

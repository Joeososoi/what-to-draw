var inspireResult = document.getElementById('inspireResult');
var inspireWords = ["cow", "horse", "cat", "dog", "chicken"]
function inspireWordsFunc() {
  var inspireWordsResult = inspireWords[Math.floor((Math.random() * inspireWords.length))];

  inspireResult.textContent = inspireWordsResult;
};
inspireWordsFunc();
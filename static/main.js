var inspireResult = document.getElementById('inspireResult');
var inspireWords = ["cow", "horse", "cat", "dog", "chicken", "goose"];

function generateWords(num) {
  let wordsArr = [];
  
  // höre auf wenn du num wörter hast
  while (wordsArr.length < num) {
    // zieh ein random wort und merks dir
    let word = inspireWords[Math.floor((Math.random() * inspireWords.length))];
    // schau ob das wort auf der liste ist
    if (wordsArr.indexOf(word) === -1) {
      wordsArr.push(word);
    }
  }
  return wordsArr;
}

function inspireWordsFunc() {
  // Wie viele zufällige Wörter muss ich generieren?
  let wordCount = 1;
  if (document.getElementById('one').checked) {
    wordCount = 1;
  } else if (document.getElementById('two').checked) {
    wordCount = 2;
  } else if (document.getElementById('three').checked) {
    wordCount = 3;
  } else if (document.getElementById('four').checked) {
    wordCount = 4;
  } else if (document.getElementById('five').checked) {
    wordCount = 5;
  } else if (document.getElementById('six').checked) {
    wordCount = 6;
  }

  // Wörter generieren
  let inspireWordsArr = generateWords(wordCount);
  // empty container
  inspireResult.innerHTML = "";
  // generiere ein div pro Wort
  for (let i = 0; i < inspireWordsArr.length; i++) {
    let div = document.createElement('div');
    div.textContent = inspireWordsArr[i];
    inspireResult.appendChild(div);
  }
  
  inspireResult.style.visibility = "visible";  
}
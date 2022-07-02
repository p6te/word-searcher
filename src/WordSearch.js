//
export default class WordSearch {
  constructor(letterGrid) {
    this.letterGrid = letterGrid;
  }

  searcherHorizontal(word) {
    const horizontalGrid = this.letterGrid;

    let startX;
    let endX;
    let startY;
    let endY;

    horizontalGrid.forEach((row, index) => {
      if (row.search(word) > -1) {
        startX = row.search(word) + 1;
        endX = startX + word.length - 1;
        startY = index + 1;
        endY = index + 1;
      }
    });

    if (startX > 0) {
      return { start: [startY, startX], end: [endY, endX] };
    } else return;
  }

  searcherHorizontalReversed(word) {
    let horizontalReversedArray = [];
    this.letterGrid.forEach((row) => {
      const reversedRow = [...row].reverse().join("");
      horizontalReversedArray.push(reversedRow);
    });

    let startX;
    let endX;
    let startY;
    let endY;

    horizontalReversedArray.forEach((row, index) => {
      if (row.search(word) > -1) {
        startX = row.length - row.search(word);
        endX = startX - word.length + 1;
        startY = index + 1;
        endY = index + 1;
      }
    });

    if (startX > 0) {
      return { start: [startY, startX], end: [endY, endX] };
    } else return;
  }

  find(words) {
    let resultsObject = {};

    words.forEach((word) => {
      const matchingWord = this.searcherHorizontal(word);
      const matchingWordReversed = this.searcherHorizontalReversed(word);

      console.log(matchingWord);

      if (matchingWord !== undefined) {
        resultsObject[word] = matchingWord;
      } else if (matchingWordReversed !== undefined) {
        resultsObject[word] = matchingWordReversed;
      } else resultsObject[word] = undefined;
    });

    console.log(resultsObject);
    return resultsObject;
  }
}

// const wordSearch = new WordSearch([
//   "abcdefghij",
//   "saggsavajg",
//   "qwopjrpqis",
//   "mfaslkfmsa",
//   "msflksmafl",
//   "oqjrwqiwra",
//   "ijqwnodgda",
//   "sfpytonasm",
//   "koqwopwqrk",
//   "kvjaasbjch", // java
// ]);

// wordSearch.find(["pyton", "java", "csos"]);

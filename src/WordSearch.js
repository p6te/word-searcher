//export default
class WordSearch {
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

  searcherTopBottom(word) {
    //trun the array for 90 deg
    let verticalArray = [];
    let addRow = "";
    this.letterGrid[0].length;

    for (let i = 0; i < this.letterGrid[0].length - 1; i++) {
      this.letterGrid.forEach((row) => {
        addRow += row[i];
      });

      verticalArray.push(addRow);
      addRow = "";
    }

    let startX;
    let endX;
    let startY;
    let endY;
    console.log(verticalArray);

    verticalArray.forEach((row, index) => {
      if (row.search(word) > -1) {
        console.log(index);
        startX = index + 1;
        endX = index + 1;
        startY = row.search(word) + 1;
        endY = startY + word.length - 1;
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
      const matchingWordVertical = this.searcherTopBottom(word);

      if (matchingWord !== undefined) {
        resultsObject[word] = matchingWord;
      } else if (matchingWordReversed !== undefined) {
        resultsObject[word] = matchingWordReversed;
      } else if (matchingWordVertical !== undefined) {
        resultsObject[word] = matchingWordVertical;
      } else resultsObject[word] = undefined;
    });
    console.log(resultsObject);
    return resultsObject;
  }
}

const wordSearch = new WordSearch([
  "abcdefghij",
  "haggsavajg",
  "awopjrpqis",
  "sfaslkfmsa",
  "ljflksmafl",
  "orjrwqiwra",
  "ivqwnodgda",
  "sapytonasm",
  "koqwopwqrk",
  "kvjaasbjch",
  "sfpytonasm",
  "sfpyoonasm", // java
]);

wordSearch.find(["pyton", "java", "csos", "haslo"]);

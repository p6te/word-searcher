import WordSearch from '../src/WordSearch.js';

describe('Letter Grid Readme Examples', () => {
  it('should find occurrences horizontally: left to right', () => {
    const letterGrid = [
      'word',
      '____',
      '____',
      '____',
    ];
    const result = {
      word: {
        start: [1, 1],
        end: [1, 4],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences horizontally: right to left', () => {
    const letterGrid = [
      'drow',
      '____',
      '____',
      '____',
    ];
    const result = {
      word: {
        start: [1, 4],
        end: [1, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences vertically: top-down', () => {
    const letterGrid = [
      'w___',
      'o___',
      'r___',
      'd___',
    ];
    const result = {
      word: {
        start: [1, 1],
        end: [4, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences vertically: bottom-up', () => {
    const letterGrid = [
      'd___',
      'r___',
      'o___',
      'w___',
    ];
    const result = {
      word: {
        start: [4, 1],
        end: [1, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences diagonally: left-top-to-right-bottom', () => {
    const letterGrid = [
      'w___',
      '_o__',
      '__r_',
      '___d',
    ];
    const result = {
      word: {
        start: [1, 1],
        end: [4, 4],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences diagonally: right-bottom-to-left-top', () => {
    const letterGrid = [
      'd___',
      '_r__',
      '__o_',
      '___w',
    ];
    const result = {
      word: {
        start: [4, 4],
        end: [1, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences diagonally: left-bottom-to-right-top', () => {
    const letterGrid = [
      '___d',
      '__r_',
      '_o__',
      'w___',
    ];
    const result = {
      word: {
        start: [4, 1],
        end: [1, 4],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences diagonally: right-top-to-left-bottom', () => {
    const letterGrid = [
      '___w',
      '__o_',
      '_r__',
      'd___',
    ];
    const result = {
      word: {
        start: [1, 4],
        end: [4, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find multiple occurrences', () => {
    const letterGrid = [
      "_____l",
      "_c__o_",
      "_s_g__",
      "_hl___",
      "basic_",
      "_r____",
      "_p____",
    ]

    const result = {
      "algol": { // diagonal
        "start": [ 5, 2 ],
        "end": [ 1, 6 ]
      },
      "basic": { // horizontal
        "start": [ 5, 1 ],
        "end": [ 5, 5 ]
      },
      "csharp": { // vertical
        "start": [ 2, 2 ],
        "end": [ 7, 2 ]
      },
      "haskell": undefined // not found
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['algol', 'basic', 'csharp', 'haskell'])).toEqual(result);
  });
});

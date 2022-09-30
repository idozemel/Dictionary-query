import { runInAction, makeAutoObservable } from "mobx";

class Store {
  letter = "";
  word = "";
  count = "";
  case = "a";
  conjuct = "";
  flagA = false;
  flagB = false;
  min = 0;
  max = 50;
  page = 1;
  options = [
    {
      label: "How many words start with the letter",
      value: "a",
    },
    {
      label: "How many times does this letter appear",
      value: "b",
    },
    {
      label: "How many words end with the letter",
      value: "c",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setLetter = (letter) => {
    this.letter = letter;
  };

  setCount = (count) => {
    this.count = count;
  };

  setWord = (word) => {
    this.word = word;
  };

  setCase = (c) => {
    this.case = c;
  };

  setConjuct = (conjuct) => {
    this.conjuct = conjuct;
  };

  setFlagA = (flagA) => {
    this.flagA = flagA;
  };
  setFlagB = (flagB) => {
    this.flagB = flagB;
  };

  setMin = (min) => {
    this.min = min;
  };
  setMax = (max) => {
    this.max = max;
  };
  setPage = (page) => {
    this.page = page;
  };
  runAction = (result) => {
    runInAction(() => {
      this.setCount(result);
      this.setFlagA(true);
    });
  };

  choosePage = () => {
    if (this.min === 0 && this.page === 1) {
      this.setMin(50);
      this.setMax(101);
    } else {
      this.setMax(50 * this.page + 1);
      this.setMin(this.max - 51);
    }
  };

  startLetter = (words) => {
    const newW = words.filter((l) => l.slice(0, 1) === this.letter);
    //How many words start with the letter <LETTER>
    this.runAction(newW.length);
  };

  sumLetter = (words) => {
    //How many times does the letter <LETTER> appear in the dictionary?
    var count = 0;
    if (this.letter === "") {
      this.runAction(count);
    } else {
      words.forEach((x) => {
        if (x.includes(this.letter)) {
          count += x.split(this.letter).length - 1;
        }
      });
      this.runAction(count);
    }
  };

  endLetter = (words) => {
    //How many words end with the letter <LETTER>?
    const endW = words.filter((l) => l.slice(-1) === this.letter);
    this.runAction(endW.length);
  };

  wordConjunction = (words) => {
    //How many words have the same letter repeated in conjunction? For instance, the word professor has `ss,` and for that, the count is 1.

    if (words.includes(this.word)) {
      var conj = 0;
      for (var i = 0; i < this.word.length - 1; i++) {
        if (this.word[i] === this.word[i + 1]) {
          conj++;
        }
      }
      runInAction(() => {
        this.setConjuct(conj);
        this.setFlagB(true);
      });
    } else {
      alert(`The word "${this.word}" does not exists`);
    }
  };

  allFuncs = (option, words) => {
    if (typeof option == "undefined") {
      return;
    }
    switch (option) {
      case "a":
        this.startLetter(words);
        break;
      case "b":
        this.sumLetter(words);
        break;
      case "c":
        this.endLetter(words);
        break;
      default:
    }
  };
}

export default new Store();

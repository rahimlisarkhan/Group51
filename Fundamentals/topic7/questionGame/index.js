var questionData = [
  {
    q: {
      question: "Goy uzunun rengi mavidirmi?",
      answer: "y",
    },
  },
  {
    q: {
      question: "Insan sonsuz yasaya bilir?",
      answer: "n",
    },
  },
  {
    q: {
      question: "Suyun rengi varmi?",
      answer: "n",
    },
  },
];

class DomElements {
  #questionTitle = document.querySelector("#questionTitle");
  alertMessage = document.querySelector("#alertMessage");

  set title(text) {
    this.#questionTitle.innerHTML = text;
  }
}

class QuestionsGame extends DomElements {
  nextQuestion = 0;
  point = 0;
  questions = [];

  constructor(suallar) {
    super();
    this.questions = suallar;
  }

  startGame() {
    this.title = this.questions[this.nextQuestion].q.question;
  }

  changeGame(cavab) {
    if (["y", "n"].indexOf(cavab) === -1) {
      alertMessage.innerHTML = "Yalniz Yes ucun :y , No ucunse : n  secin!";
      return;
    }

    if (this.questions[this.nextQuestion].q.answer === cavab) {
      this.nextQuestion += 1;
      this.point += 10;
      alertMessage.innerHTML = "XAl: " + this.point + " Aferin Duzdu!!!";
      this.startGame();
      return;
    }

    alertMessage.innerHTML = "Sehfdi duzunu sec!";
  }
}

var questionsGameHighLevel = new QuestionsGame(questionData);

questionsGameHighLevel.startGame();

window.onkeydown = function (e) {
  questionsGameHighLevel.changeGame(e.key);
};

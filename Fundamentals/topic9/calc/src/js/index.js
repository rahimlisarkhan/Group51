$(document).ready(function () {
  // Dom elements
  let resultContent = $(".header-result");
  let fistNumContent = $(".num-first");
  let secondNumContent = $(".num-second");
  let operationContent = $(".operation");

  //variables
  let firstNum = "";
  let secondNum = "";
  let operation = "";
  let result = "";
  let nextStep = false;

  function addNumber(num) {
    if (nextStep) {
      secondNum += num;
      secondNumContent.fadeIn();
      secondNumContent.html(secondNum);
    } else {
      firstNum += num;
      fistNumContent.fadeIn();
      fistNumContent.html(firstNum);
    }
  }

  function chooseOperator(opr) {
    operation = opr;
    nextStep = true;
    operationContent.html(operation);
    operationContent.fadeIn();
  }

  function resultEqual() {
    switch (operation) {
      case "+":
        result = +firstNum + +secondNum;
        break;
      case "-":
        result = +firstNum - +secondNum;
        break;
      case "*":
        result = +firstNum * +secondNum;
        break;
      default:
        result = +firstNum / +secondNum;
    }

    resultContent.fadeIn();
    resultContent.html(result);
  }

  function clearCalc() {
    firstNum = "";
    secondNum = "";
    operation = "";
    result = "";
    nextStep = false;

    operationContent.fadeOut();
    fistNumContent.fadeOut();
    secondNumContent.fadeOut();
    resultContent.fadeOut();
  }

  $(document).on("click", ".calc-button", function () {
    let button = $(this);
    let value = button.html();

    if (button.hasClass("calc-num")) {
      addNumber(value);
      //nomre menimseden f1
    } else if (button.hasClass("calc-operation")) {
      //operator menimsden f2
      chooseOperator(value);
    } else if (button.hasClass("calc-equal")) {
      console.log("bu beraberlik operatordur", value);
      //operator menimsden netice gosteren f3
      resultEqual();
    } else {
      clearCalc();
    }
  });
});

//NUMBERS
const NUM_ONE = document.querySelector("#one");
const NUM_TWO = document.querySelector("#two");
const NUM_THREE = document.querySelector("#three");
const NUM_FOUR = document.querySelector("#four");
const NUM_FIVE = document.querySelector("#five");
const NUM_SIX = document.querySelector("#six");
const NUM_SEVEN = document.querySelector("#seven");
const NUM_EIGHT = document.querySelector("#eight");
const NUM_NINE = document.querySelector("#nine");
const NUM_ZERO = document.querySelector("#zero");

//OPERATORS
const OPT_ADD = document.querySelector("#add");
const OPT_SUB = document.querySelector("#sub");
const OPT_MUL = document.querySelector("#multiply");
const OPT_DIV = document.querySelector("#div");
const OPT_MOD = document.querySelector("#mod");
const OPT_EQUAL = document.querySelector("#equals");
const OPT_DECIMAL = document.querySelector("#decimal");

// CLEAR
const BUT_CLEAR = document.querySelector("#clear");

// POSITIVE AND NEGATIVE
const BUT_PN = document.querySelector("#posNeg");

//DELETE
const BUT_DELETE = document.querySelector("#del");

//CALCULATOR SCREEN
const SCREEN_RESULTS = document.querySelector("#results");
const SCREEN = document.querySelector("#calculator #calcScreen #results");

let expressionHidden = "";
let numShownCalcScreen = "";
let answer = 0;

/* 
NUMBER ON CLICKS
   - Max numbers on screen 16
   - Shows number on calc screen
   - Adds number to expression
*/

NUM_ONE.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "1";
    numShownCalcScreen += "1";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_TWO.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "2";
    numShownCalcScreen += "2";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_THREE.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "3";
    numShownCalcScreen += "3";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_FOUR.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "4";
    numShownCalcScreen += "4";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_FIVE.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "5";
    numShownCalcScreen += "5";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_SIX.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "6";
    numShownCalcScreen += "6";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_SEVEN.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "7";
    numShownCalcScreen += "7";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_EIGHT.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "8";
    numShownCalcScreen += "8";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_NINE.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "9";
    numShownCalcScreen += "9";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});
NUM_ZERO.addEventListener("click", function () {
  if (numShownCalcScreen.length >= 16) {
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  } else {
    expressionHidden += "0";
    numShownCalcScreen += "0";
    SCREEN_RESULTS.innerHTML = numShownCalcScreen;
  }
});

/*
OPERATORS ON CLICKS
   - Adds operator to hidden expression
   - Clears screen
   - For decimal: adds to numbers shown on screen
*/
OPT_DECIMAL.addEventListener("click", function () {
  expressionHidden += ".";
  numShownCalcScreen += ".";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_ADD.addEventListener("click", function () {
  expressionHidden += " + ";
  numShownCalcScreen = "";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_DIV.addEventListener("click", function () {
  expressionHidden += " / ";
  numShownCalcScreen = "";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_MOD.addEventListener("click", function () {
  expressionHidden += " % ";
  numShownCalcScreen = "";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_MUL.addEventListener("click", function () {
  expressionHidden += " * ";
  numShownCalcScreen = "";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_SUB.addEventListener("click", function () {
  expressionHidden += " - ";
  numShownCalcScreen = "";
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});
OPT_EQUAL.addEventListener("click", function () {
  console.log(expressionHidden);
  searchOperator();
});

//OTHER BUTTONS ON CLICKS
BUT_DELETE.addEventListener("click", function () {
  //Deletes the last number/decimal added
  if (numShownCalcScreen.length > 1) {
    let newExpression = Array.from(numShownCalcScreen);
    newExpression.splice(newExpression.length - 1, 1);
    expressionHidden = newExpression.join("");
    SCREEN_RESULTS.innerHTML = newExpression.join("");
  } else {
    expressionHidden = "";
    SCREEN_RESULTS.innerHTML = "-";
    return;
  }
});

BUT_CLEAR.addEventListener("click", function () {
  //clears calculator
  numShownCalcScreen = "";
  expressionHidden = "";
  SCREEN_RESULTS.innerHTML = "-";
  answer = 0;
  document.getElementById("calcScreen").style.fontSize = "5em";
});

BUT_PN.addEventListener("click", function () {
  //Changes number to a postive or negative number
  console.log(numShownCalcScreen.length);
  let expTempTrim = Array.from(expressionHidden);
  let index = expressionHidden.indexOf(numShownCalcScreen); //find index of number
  // console.log(index);
  expTempTrim.splice(index, 2); //remove the number from expression
  console.log(expTempTrim.splice(index, 2));
  expressionHidden = expTempTrim.join("");
  // console.log(expTempTrim);
  expressionHidden += (Number(numShownCalcScreen) * -1).toString(); //add negative number
  // console.log(expressionHidden);
  numShownCalcScreen = (Number(numShownCalcScreen) * -1).toString();
  SCREEN_RESULTS.innerHTML = numShownCalcScreen;
});

/*
  Function: errorMessage
  Parameters: None
  Purpose: Sends out 'error' message when expression is invalid and clears calculator
*/
function errorMessage() {
  SCREEN_RESULTS.innerHTML = "ERROR";
  console.info("ERROR: MORE OPERATORS THAN NUMBERS");
  numShownCalcScreen = "";
  expressionHidden = "";
  answer = 0;
}

/*
  Function: searchOperator
  Parameters: None
  Purpose: Solve the expression and return the answer
*/
function searchOperator() {
  //If there is a space at the end of the expression then there are more operators then numbers, thus error
  if (expressionHidden.charAt(expressionHidden.length - 1) == " ") {
    console.log("reached");
    errorMessage();
    return;
  }

  //Turn the expression into an array
  let arrayExpression = expressionHidden.split(" ");
  let numbers = [];
  let operators = [];
  let countN = 0;
  let countO = 0;

  //sort numbers(odd) and operators(even)
  for (let j = 0; j < arrayExpression.length; j++) {
    if (arrayExpression[j] === "") {
      //If element equals empty string error
      errorMessage();
      return;
    }
    if (j % 2 == 0) {
      //should be all numbers
      numbers[countN] = arrayExpression[j];
      countN++;
    } else {
      //should be all operators
      operators[countO] = arrayExpression[j];
      countO++;
    }
  }
  // console.log(numbers + "<<<" + numbers.length);
  // console.log(operators + " : op list");

  if (operators.length >= numbers.length) {
    //If there are more operators then numbers, error
    errorMessage();
    return;
  } else {
    let tempAnswer = Number(numbers[0]), //set the temp answer to the first element
      nextNumIndex = 1; // Set the next number index at 1

    // loop through operators and perform the neccessary math. If the next number isn't defined end loop
    for (let l = 0; l < operators.length; l++) {
      // console.log(operators[l]);
      if (operators[l] == "+" && numbers[nextNumIndex] != undefined) {
        tempAnswer += Number(numbers[nextNumIndex]);
      } else if (operators[l] == "-" && numbers[nextNumIndex] != undefined) {
        tempAnswer -= Number(numbers[nextNumIndex]);
      } else if (operators[l] == "*" && numbers[nextNumIndex] != undefined) {
        tempAnswer *= Number(numbers[nextNumIndex]);
      } else if (operators[l] == "/" && numbers[nextNumIndex] != undefined) {
        tempAnswer /= Number(numbers[nextNumIndex]);
      } else if (operators[l] == "%" && numbers[nextNumIndex] != undefined) {
        tempAnswer %= Number(numbers[nextNumIndex]);
      } else {
        break;
      }
      nextNumIndex++;
    }
    answer = tempAnswer;

    //If temp answer is greater than 15 change to exponential form and change font size
    if (tempAnswer.toString().length > 15) {
      answer = answer.toExponential();
      document.getElementById("calcScreen").style.fontSize = "3.8em";
    } else if (answer == NaN) {
      errorMessage();
      return;
    }

    SCREEN_RESULTS.innerHTML = answer.toString(); //show answer on calc screen
  }
  // console.log(expressionHidden);
  // console.log(arrayExpression);
}

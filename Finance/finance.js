document.addEventListener("DOMContentLoaded", (event) => {

  var calculateBtn = document.getElementById("calculate");

  calculateBtn.onclick = function calculate(e) {
    e.preventDefault();
    let amount = document.querySelector("#myForm").amt.value;
    let rate = document.querySelector("#myForm").interestRate.value;
    let period = document.querySelector("#myForm").period.value;
    let option = document.querySelector("#option").selectedIndex;
   
    let totalAmount = calc(option, period, rate, amount);
    let resultEl = document.getElementById("result");
    resultEl.innerText = Math.round(totalAmount);

    let descEl = document.getElementById("desc");
    descEl.innerText = getDetails(option);
  };

  let allCalculations = Object.freeze({ USCA: 0, USPW: 1, SF: 2, CR: 3 });

  function calc(toCalculate, period, rate, annualIncrement) {
    let I = rate / 100;
    let N = period;
    let A = annualIncrement;
    let common = Math.pow(1 + I, N);
    let result = 0;
    switch (toCalculate) {
      case allCalculations["USCA"]:
        result = Math.round(A * ((common - 1) / I));
        break;

      case allCalculations["USPW"]:
        result = Math.round(A * ((common - 1) / (I * common)));
        break;

      case allCalculations["SF"]:
        result = Math.round(A * (I / (common - I)));
        break;

      case allCalculations["CR"]:
        result = Math.round(A * ((I * common) / (common - 1)));
        break;

      default:
        console.log("something is not right");
        break;
    }
    return result||0;
  }

  function getDetails(toCalculate) {
    desc = "";
    switch (toCalculate) {
      case allCalculations["USCA"]:
        desc = "Calculates the total value after given years, compounded annually."
        break;

      case allCalculations["USPW"]:
        desc = ""
        break;

      case allCalculations["SF"]:
        desc = ""
        break;

      case allCalculations["CR"]:
        desc = ""
        break;

      default:
        console.log("something is not right");
        break;
    }
    return desc || "";
  }
});

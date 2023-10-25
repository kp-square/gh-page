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
        result = Math.round(A * (I / (common - 1)));
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
        desc = "Uniform Series Compound Interest refers to a series of equal cash flows, spaced equally in time and compounded at a certain interest rate. It’s commonly used in savings and loan repayment scenarios. The future value of a series of cash flows is calculated, taking into account the effect of compounding interest over the period. Here, amount means equal annual cash flow."
        break;

      case allCalculations["USPW"]:
        desc = "Uniform Series Present Worth concept is used to determine the present value of a series of equal future cash flows, discounted at a certain interest rate. This is particularly useful for investment analysis, where you want to know the current worth of future earnings or costs, considering the time value of money. Here, amount means equal annual cash flows."
        break;

      case allCalculations["SF"]:
        desc = "A sinking fund is a fund established to accumulate money over time to pay off a future expense or debt. Equal annual (or other periodic) deposits are made into the fund, which earns interest. The purpose is to spread out the cost of a large future expense over multiple periods, making it more manageable. Here, amount means future worth."
        break;

      case allCalculations["CR"]:
        desc = "Capital recovery involves determining the annual equivalent amount required to recoup an initial investment over a specified period, considering the time value of money. This is often used in the context of asset depreciation and loan repayments, to establish a schedule of payments that will cover the initial cost plus interest. Here, amount means present worth."
        break;

      default:
        console.log("something is not right");
        break;
    }
    return desc || "";
  }
});

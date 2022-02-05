function calculate(event){
    event.preventDefault();
    let amount = document.querySelector("#myForm").amt.value;
    let rate =  document.querySelector("#myForm").interestRate.value;
    let period = document.querySelector("#myForm").period.value;

    let totalAmount = amount * (Math.pow((1 + rate/100), period));
    document.querySelector("#result").innerHTML = Math.round(totalAmount);
}

let allCalculations = Object.freeze({'USCA':0, 'USPW':1, 'SF':2, 'CR':3});


function calculate(toCalculate, period, rate, annualIncrement){
    let I = rate/100;
    let N = period;
    let A = annualIncrement;
    let common = pow((1+I),N);
    let result = 0;
    switch(toCalculate){
        case allCalculations['USCA']:
            result = Math.round(A * ((common - 1)/I));
            break;
        
        case allCalculations['USPW']:
            result = Math.round(A * ((common - 1)/(I*common)));
            break;

        case allCalculations['SF']:
            result = Math.round(A * (I / (common - I)));
            break;

        case allCalculations['CR']:
            result = Math.round(A * ((I*common)/(common - 1)));
            break;

        default:
            console.log("something is not right");
            break;
    }   


}
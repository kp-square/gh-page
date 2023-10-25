function calculate(e){
    e.preventDefault();
    let xf = Number(document.querySelector("#myForm").x_f.value);
    let xi =  Number(document.querySelector("#myForm").x_i.value);

    let yf = Number(document.querySelector("#myForm").y_f.value);
    let yi =  Number(document.querySelector("#myForm").y_i.value);

    if(isNaN(xf) || isNaN(xi) || isNaN(yf) || isNaN(yi)){
        document.querySelector("#error").innerHTML = "Sorry data isn't valid";
        return;
    }
    
    let sqin = (xf*12 + xi) * (yf*12+yi)
    let sqft = sqin/(12*12);
    document.querySelector("#result").innerHTML = sqft.toString() + " sq.ft";
}
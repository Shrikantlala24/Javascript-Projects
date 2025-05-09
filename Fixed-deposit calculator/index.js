function calmatamount() {

    //get input from user
    
    const principle = parseFloat(document.getElementById("Principle").value);
    const interest = parseFloat(document.getElementById("Interest").value) / 100;
    const tenure = parseFloat(document.getElementById("tenure").value);

    // let's start the calculation
    const maturityamount = principle + (principle * interest * tenure);

    // display the result
    document.getElementById("result").innerHTML = `Maturity Amount: ${maturityamount.toFixed(2)} `;

}

document.getElementById("BTN").addEventListener("click", calmatamount);
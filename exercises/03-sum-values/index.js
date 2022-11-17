// adding the function to the window makes it globally available
window.calculateSumListener = function calculateSumListener() {
    //Return the value of the input #firstNumber
    var stringA = document.getElementById("firstNumber").value;
    //Return the value of the input #secondNumber
    var stringB = document.getElementById("secondNumber").value;
    //your code goes here
    let num1 = parseInt(stringA);
    let num2 = parseInt(stringB);
    let result = num1 + num2;
    console.log(result);
    //document.getElementById(resultNumber).innerHTML = "hola";
    document.getElementById("resultNumber").value = result;
};
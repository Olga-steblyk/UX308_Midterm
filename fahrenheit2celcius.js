//2) Write a function that converts temperatures in fahrenheit to celsius. 
//   Test at least boiling, freezing water temperatures and room temperature (70).

var fahr = 4;
function fahr2cel (fahr){
    var cel = (fahr-32) * (5/9);
    console.log(cel);
    return cel;
}

export {fahr2cel}
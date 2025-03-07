/*
1)  Write a function that calculates the total value of a set of coins in dollars.
    Each coin is worth:
        nickel:  $0.05
        dime:    $0.10
        quarter: $0.25
        loonie:  $1.00
        toonie:  $2.00
    -------------------------------------------------------
    Parameters:
        nickels - number of nickels
        dimes - number of dimes
        quarters - number of quarters
        loonies - number of loonies
        toonies - number of toonies
    Returns:
        total - total value of coins in dollars

Write at least 3 tests. Don't forget to test 0. 
*/
let nickels,dimes,quarters,loonies,toonies;
function coinvalue (nickles,dimes,quarters,loonies,toonies){
    var sum;
    nickles * 0.05;
    dimes * 0.10;
    quarters * 0.25;
    loonies * 1.00;
    toonies * 2.00;

    return sum = nickles + dimes + quarters + loonies + toonies;
}
export {coinvalue}
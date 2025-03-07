/*
4) Write a function that calculates total cost of a gym membership. A member gets a
    discount according to the number of friends they sign up.
        0 friends: 0% discount
        1 friend: 5% discount
        2 friends: 10% discount
        3 or more friends: 15% discount
        -------------------------------------------------------
    Parameters:
        cost - a gym membership base cost (float > 0)
        friends - number of friends signed up (int >= 0)

Make sure to test with, 1, 2, 3 and 4 friends.
*/

//var friends = 2;
//cost = 100;
function gymmembership (friends){
    let cost;
    let results;
    if (friends = 0){
        console.log("You did not receive a discount due to no referring, please add referrals ");
        cost = 100 * 1;
        
        //0% discount
    } else if (friends = 1){
        cost = 100 * 0.95;
        return results = `Thank you for referring a friend, your new cost is $${cost}`; 
        //5% discount
    } else if (friends = 2){
        //10% discount
        cost = 100 * 0.90;
        return results = `Thank you for referring 2 friends, your new cost is $${cost}`; 
    } else if (friends >= 3){
        //15% discount
        cost = 100 * 0.85;
        return results = `Thank you for referring 3+ friends, your new cost is $${cost}`; 
    }else {
        
    }

    
}

export {gymmembership}
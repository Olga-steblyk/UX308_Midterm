/* 
5) Earthquake strengths are categorized as:

Richter Scale Number	Characterization
n < 5	Little or no damage
5 <= n < 5.5	Some damage
5.5 <= n < 6.5	Serious damage: walls may crack or fall
6.5 <= n < 7.5	Disaster: buildings may collapse
n >= 7.5	Catastrophe: most buildings destroyed
Write a function that determines damage level given earthquake intensity measured
    on the Richter scale.
    -------------------------------------------------------
    Parameters:
        intensity - Richter scale number for severity of earthquake

    Returns:
        result - description of earthquake damage

*/
var intensity = 3;
function richterscale(intensity){
    let results;
    if (intensity < 5){
        //Little or no damage
        return results = `Little or no damage`;

    }else if (intensity >= 5 && intensity <=5.5){
        //Some damage
        console.log(`Your input of is Good`);
        return results = `Some Damage`;
        

    }else if (intensity > 5.5 && intensity <=6.5){
        //Serious damage: walls may crack or fall
        return results = `Serious damage: walls may crack or fall`;

    }else if (intensity > 6.5 && intensity <=7.5){
        //Disaster: buildings may collapse
        return results = `Disaster: buildings may collapse`;

    }else if (intensity >7.5){
        return results = `Catastrophe: most buildings destroyed`;   

    }else {
        return results = `Your input was invalid, please try again`;
    }

    return;
}

export {richterscale}
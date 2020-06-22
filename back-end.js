




//takes in the user's input
let input = getInput(0)
let input2 =getInput(1)


let sentence = " converted is:"
let converted = "";
let result = input + input2 + sentence + " " + convert(input, input2) + converted
 



// function that takes in a number as well as the unit of measure 
function convert(num, measurement){

    if( measurement === 'cm'){
        converted = "inches"
        return num * 2.54 ;
    }
    else if (measurement === 'in'){
        converted = "cm"
        return num / 2.54;
    }
    else if(measurement === 'ft'|| measurement ==="feet"){
    converted = "inches"
    return num * 12;
    }
    else if (measurement ==='inches'){
    converted = "feet"
    return num / 12;
    }
    // else if (measurement === "que"){
    // return "How are you doing today?";
    
    // }
    }

    module.exports=back-end;
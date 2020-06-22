




//takes in the user's input
let input = getInput(0)
let input2 =getInput(1)

//sends message back to user
let sentence = " converted is:"
let converted = "";
// let result = ""
// if(convert(input,input2)==="How are you doing today?"){

// result = convert(input,!input2)
 
// }else{
let result = input + input2 + sentence + " " + convert(input, input2) + converted
 

// }

// function that takes in a number as well as the unit of measure 
function convert(num, measurement){

    if( measurement === 'cm'){
        converted = "in"
           return num * 2.54 ;
    }
    else if (measurement === 'in'){
        converted = "cm"
            return num / 2.54;
    }
    else if(measurement === 'ft'|| measurement ==="feet"){
        converted = "inches";
           return num * 12;
    }
    else if (measurement ==='inches'){
        converted = "feet";
            return num / 12;
    }else if(measurement === 'mi'){
        converted = "km"
            return num * 0.6214 ;
    }
    else if(measurement === 'km'){
        converted = "mi";
            return num / 0.6214 ;
    }
    else if (measurement === "kilometers"){
        converted = "centimeters"
            return num * 100,000;
    }
    else if (measurement === "centimeters"){
        converted = "kilometers"
            return num / 100,000;
    }
    else if (num === num || measurement === undefined){
        console.log( " we need a unit of measure")
    }
    
   
 }
// // asks how your day is?
//  if( input === "hai") {
//     console.log( "How are you doing today?");
    
// }else{
//     console.log(result)

// }

//message if there are no values inputted
if(input === undefined){
    console.log( 'please input a number for conversion')
}else{
console.log(result)

}

//helper function
function getInput(n) {
    return process.argv[n + 2];
}





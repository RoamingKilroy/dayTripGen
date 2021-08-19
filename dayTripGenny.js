"use strict"

let finalArray=[];
const locArray = ["Philadelphia", "New York", "Dallas", "Miami", "Orlando", "Los Angles"];
const travelArray = ["Rideshare", "Public Transportation", "Personal Vehicle"]
const mealArray = ["BK", "Chic Fil A", "Nothing"];
const entArray = ["Club", "Comedy Show", "Muesum", "Concert"]

function getRandomItem(arr){
   return arr[Math.floor(Math.random()*arr.length)];
}

let locRandom = getRandomItem(locArray);
let travelRandom = getRandomItem(travelArray);
let mealRandom = getRandomItem(mealArray);
let entRandom = getRandomItem(entArray);
finalArray.push(locRandom, travelRandom, mealRandom, entRandom);

function tripPrint(){
    console.log("Your day trip is to the city of " + locRandom + ". You will be getting around via " 
    + travelRandom + ". You should eat at " + mealRandom + 
    ". And you're entertainment will be going to a " + entRandom + "." + 
    " Are you happy with this trip?");
}
function response(){
    let trip = prompt("Your day trip is to the city of " + locRandom + ". You will be getting around via " 
    + travelRandom + ". You should eat at " + mealRandom + 
    ". And you're entertainment will be going to a " + entRandom + "." + 
    " Are you happy with this trip?")
    if(trip == "yes" || trip == "yes"){
        tripPrint();
        return true;
    }
    else{
        return false;
    }
}

function tripChanger (){
    while(response() == false){
        let noPrompt = prompt("Please let me know which you'd like to change. " +
        "1 for city, 2 for transport, 3 for meal, or 4 for entertainment.");
        switch(noPrompt){
            case "1":
                locRandom = getRandomItem(locArray);
                break;
            case "2":
                travelRandom = getRandomItem(travelArray);
                break;
            case "3":
                mealRandom = getRandomItem(mealArray);
                break;
            case "4":
                entRandom = getRandomItem(entArray);
                break;     
        }        
    }
}

tripChanger ()

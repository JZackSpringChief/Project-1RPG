//samurai path choice one


const samPath = "Hello Samuria, you have entered the great colosseum of Js-topia. You are nearing the end of the rule-all tournament and you have 2 fights left good luck...";
//console.log(samPath)
export let opponentFirstAttack = "Your opponent comes at you with intensity and with intent to kill you, you : (1) dodge left (2) dodge right or (3) or hit back with a counter."

let choice = 3
if (choice == 1){
    console.log("You succefully dodged left and hit opponent with your technique Tsukuyomi!!!");
}else if (choice == 2){
    console.log("you get slashed across the chest and start bleeding, but you shake it off and get ready for a counter");
}else if (choice ==3){
    console.log("successful dodge! But you missed the counter attack leaving you open!!!")
}

//samurai path choice two
//if previous choice was 1
export let roundTwo = "Seeing your opponent has an opening, what will you do? (1)follow up attack or (2)compose self and get ready to do a flurry of attacks?";

let secondChoice = 1
     if(secondChoice == 1){
        console.log("ohhh noo! you got hit for getting cocky!") 
}else if (secondChoice == 2){
        console.log("Relax your muscles, breathe slowly and land 10 consecutive hits!")
}
        
//if previous choice was 2
//make a feint and fall to ground(0) or get ready counter attack(1)
console.log("after getting devistation blow your choices are (1) fall to the ground due to injury or (2) pick yourself back up and get ready for a counter attack!")
let secChoiceWastwo = 1
     if(secChoiceWastwo == 1){
        console.log("Game over... you failed as a Samurai, commit seppuku") //this ends in you losing
}else if (secChoiceWastwo == 2){
        console.log("The opponent readys attack, you dodge horizontally confusing the opponent and stabbing them in the heart winning the colosseum, becoming its champion!!!")}  //this ends in you winning


//if previous choice was 3
        console.log("After missing your opponent you can ready your Chuden No Kami stance (1) or commit seppuku(2)")
let secChoiceWasThree = 1
     if(secChoiceWasThree == 1){
        console.log("Hit opponent with Heavenly Blade Dane defeating opponent and winning the tournament!!") //this ends in you losing
}else if (secChoiceWasThree == 2){
        console.log("Game over.....")}  



        export let samuraiWin = "The Samurai has reveled that they were once a conqueror of the northern continent and has committed terrible atrocities but has been reformed and is now comitted to bringing peace and prosperity to the New World of Js-topia."

        
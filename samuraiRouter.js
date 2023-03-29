import express from "express";

import { opponentFirstAttack } from "./samuria_path.js";
import { roundTwo } from "./samuria_path.js";
export const samuraiRouter = express.Router();

samuraiRouter.get("/", (req, res) => {
    res.send("Hello Samurai, you have entered the great colosseum of Js-topia you are nearing the end of the rule-all tournament you have 2 fights left good luck...")
});
samuraiRouter.get("/story", (req, res)=> {
    res.send(opponentFirstAttack)
});
samuraiRouter.get("/story/:choiceOne", (req, res)=> {
    if (req.params.choiceOne == 1){
        res.send("You succefully dodged left and hit opponent with your technique Tsukuyomi!!!");
    }else if (req.params.choiceOne == 2){
        res.send("you get slashed across the chest and start bleeding, but you shake it off and get ready for a counter");
    }else if (req.params.choiceOne ==3){
        res.send("successful dodge! But you missed the counter attack leaving you open!!!")
    }else {
        res.send("you suck, choose 1-3")
    }
});
samuraiRouter.get("/story/1/path", (req, res)=> {
    res.send(roundTwo)
});

samuraiRouter.get("/story/1/path/:choiceTwo", (req, res) => {
    if(req.params.choiceTwo == 1){
        res.send("ohhh noo! you got hit for being cocky! throwing you to the ground...") 
    }else if (req.params.choiceTwo == 2){
        res.send("Relax your muscles, breath slowly and land 10 consecutive hits!")
    }else {
        res.send("you suck, choose 1 or 2")
    }
});

samuraiRouter.get("/story/:choiceOne/path/:choiceTwo/end", (req, res)=> {
    if(req.params.choiceThree == 1){
        res.send()
    }
})
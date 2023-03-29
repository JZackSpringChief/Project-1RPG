import express from "express";
import { samuraiRouter } from "./samuraiRouter.js";
//import { ninjaRouter } from "./ninjaRouter.js";
//import { heroRouter } from "./heroRouter.js";
const app = express();

import { opponentFirstAttack } from "./samuria_path.js";
import { roundTwo } from "./samuria_path.js";

const port = 3131;



app.use(express.json());

const classSel =
  "welcome player, you are about to embark on and exciting adventure, please selet a class. You have the choice of: Samurai, Ninja or Hero... what will you choose?";
const classArray = [
  {
    class: "Samurai",
    description:
      "The Samurai wields the legendary Moonviel katana and thier past has a dark secret",
  },
  {
    class: "Ninja",
    description:
      "The Ninja wields the Rivers of blood sword and thier hopes are to bring piece in Js-topia.",
  },
  {
    class: "Hero",
    description:
      "Finally, the Hero, they wield the Dark Moon great sword, and they hope to bring prosperity to the lands between.",
  },
];

app.get("/welcome", (req, res) => {
  res.send(classSel);
  console.log(req.query);
});
app.get("/Description", (req, res) => {
  res.send(classArray);
});

app.use("/samurai", samuraiRouter)




app.get("/", (request, response) => {
  response.send("server is up\n");
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

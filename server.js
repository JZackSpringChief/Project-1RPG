import express from 'express'


const app = express()

const port = 3131

app.use(express.json())

// const obj = JSON.parse(text);

// const welcomePlayer = "Hello player, please enter your name...";
const classSel = "welcome player, you are about to embark on and exciting adventure, please selet a class. You have the choice of: Samurai, Ninja or Hero... what will you choose?"
const classArray = [ 
        {class: "Samurai",
        description: "The Samurai wields the legendary Moonviel katana and thier past has a dark secret"},
        {class: "Ninja",
        description: "The Ninja wields the Rivers of blood sword and thier hopes are to bring piece in Js-topia."},
        {class: "Hero",
        description: "Finally, the Hero, they wield the Dark Moon great sword, and they hope to bring prosperity to the lands between."},

    ];
//users is a test
//const users 

// app.get('/name', (req,res) => {
//     res.send(window.prompt("Please enter your Name"));
// })

// app.get('/welcome', (req, res) => {
//     res.send(welcomePlayer);
//     //req.send()
// })

app.get('/welcome', (req, res) => {
    res.send(classSel);
    console.log(req.query);
})
app.get('/Description', (req, res) => {
    
    res.send(classArray);
    
})

// app.post('/playerName', (req, res) => {
//     const newUser = req.body;
//     console.log(newUser);
//     users.push(newUser);
//     res.send("succefully added " +  newUser.name);
// });

app.get('/', (request, response) =>{
    response.send('server is up\n');
});


app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});
import express from 'express'

const app = express()

const port = 3131

app.use(express.json())
// const obj = JSON.parse(text);

const welcomePlayer = "Hello player, please enter your name...";
const classSel = "You are about to embark on and exciting adventure, please selet a class. You have the choice of: Samurai, Ninja or Hero... what will you choose?"
//users is a test
//const users 

// app.get('/name', (req,res) => {
//     res.send(window.prompt("Please enter your Name"));
// })

app.get('/welcome', (req, res) => {
    res.send(welcomePlayer);
    //const playerName = req.params.name
    // const playerName = window.prompt("please enter your name");
    req.send()
    //console.log(welcomePlayer)
})

app.get('/classSelect', (req, res) => {
    res.send(classSel);
    console.log(req.query);
})
app.get('/welcome/:name', (req, res) => {
    
    const playerName = window.prompt("what is your name?");
res.send(`Welcome to the world of Js-topia ${playerName}`);
    //req.send()
})

app.post('/playerName', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    users.push(newUser);
    res.send("succefully added " +  newUser.name);
});

app.get('/', (request, response) =>{
    response.send('server is up\n');
});


app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});
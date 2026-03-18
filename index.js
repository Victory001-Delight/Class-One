const express = require('express')
const ejs = require('ejs')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const port = process.env.PORT 
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
})


app.set("view engine", "ejs")



app.get('/home', (req, res) => {
    res.send('Welcome Home')
    console.log(__dirname);
})

app.get("/student", (req, res) => {
    res.send(students)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})

// app.get("/about", (req, res) => {
//     res.render("index", {name: name})
    
// })


app.get("/about", (req, res) => {
    res.render("about", {name: name})
})





app.listen(port, ()=> {
    console.log(`I am runnng on port ${port}`);
    
})
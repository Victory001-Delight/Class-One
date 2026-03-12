const express = require('express')
const ejs = require('ejs')
const app = express();
const port = 2123;

app.set("view engine", "ejs")

const name = "Emmanuel Gabriel";
const students = [
    {
        Name: "John Doe",
        Age: 20,
        Grade: "A"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },    
    {
        Name: "Alex Smith",
        Age: 20,
        Grade: "B"
    },
    {
        Name: "Jane smile",
        Age: 42,
        Grade: "B"
    },   
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },    
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    },
    {
        Name: "Jane Smith",
        Age: 22,
        Grade: "B"
    }

]


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



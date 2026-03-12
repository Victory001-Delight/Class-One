const express = require('express')
const app = express();
const port = 2123;
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
})

app.get("/student", (req, res) => {
    res.send(students)
})


app.listen(port, ()=> {
    console.log(`I am runnng on port ${port}`);
    
})



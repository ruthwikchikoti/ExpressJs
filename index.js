const express = require('express');
const app = express();
let courses = [ {
    id: 1,
    name: 'javascript'
}, {
    id: 2,
    name: 'nodejs'
}, {
    id: 3,
    name: 'express'
} ];

app.get('/courses', (req, res) => {
    res.json(courses);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
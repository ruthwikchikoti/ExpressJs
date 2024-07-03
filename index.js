const express = require('express');
const app = express();

app.use(express.json());

let courses = [ {
    id: 1,
    name: 'javascript'
}, {
    id: 2,
    name: 'nodejs'
}, {
    id: 3,
    name: 'express'
}

];

app.get('/courses', (req, res) => {
    res.json(courses);
})

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.json(course);
    console.log("added");
}
)
app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given ID was not found');
    }

    course.name = req.body.name;
    res.json(course);
}
)

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.json(course);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
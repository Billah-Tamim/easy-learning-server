const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');
const courses = require('./data/courses.json');


app.use(cors());

app.get('/', (req, res)=>{
    res.send('easy learning api work successfully')
})
app.get('/catagories', (req, res)=>{
    res.send(catagories)
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    if(id == 8){
        res.send(courses)
    }
    else{
        const sameCourses = courses.filter(course => course.category_id == id);
        res.send(sameCourses);
    }
})
app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const course = courses.find(single => single._id == id);
    res.send(course);
})

app.listen(port, ()=>{
    console.log('app is run in port', port);
})
const Joi = require('joi');//joi is library for validating data in API
const express = require('express');
const app = express();


app.use(express.json());


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : "interns"
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// var query = "SELECT * FROM posts WHERE title=" + mysql.escape("tony");
// console.log(query);

// connection.end();


const interns = [
    {
      id: 1,
      first_name: "Tony",
      last_name: "Stark"
      
    },
    {
      id: 2,
      first_name: "Steve",
      last_name: "Rogers"
      
    },
    {
      id: 3,
      first_name: "bruce",
      last_name: "banner"
    } , 
{
        id: 4,
        first_name: "peter",
        last_name: "parker"
    },
    {

        id:5,
        first_name:"kiran",
        last_name: "b"

    }
];

app.get('/',(req, res) =>{
    res.send("test for request on week 1 assignment as an intern at techsophy");
});

// to test endpoints on ports here it is api/internns

app.get('/api/interns',(req , res) => {
res.send(interns);
});



app.get('/api/interns',(req , res) => {
    res.send(interns);
    });



app.post('/api/interns',(req,res) => {

//---------------------------------------------------Validation code 
const { error } = validateCourse(req.body);
if(error) return res.status(400).send(error.details[0].message);
   // 400 bad request
 
   

// -----------------------------------------------------------------------------------------  
   
    const intern = {
    id: interns.length +1,
    first_name: req.body.first_name,
    last_name:req.body.last_name
   };
    interns.push(intern);
    res.send(intern);


});

app.put('/api/interns/:id', (req,res) =>{

//look up the intern
// if not existing ,return 404
let intern = interns.find(c => c.id === parseInt(req.params.id));
if(!intern) return res.status(404).send("Not found standard code 404,it isn't here ,try something else or create");
res.send(intern);


//validate 
//if invalid return 400 bad request
const { error } = validateCourse(req.body);
 if(error) return res.status(400).send(error.details[0].message);
   // 400 bad request  
    

//update intern
intern.id = req.body.id;
intern.first_name = req.body.first_name;
intern.last_name = req.body.last_name;
res.send(intern);
//return the updated course

});



app.delete('/api/interns/:id', (req,res) => {

//look up the course
//not existing ,return 404
let intern = interns.find(c => c.id === parseInt(req.params.id));
if(!intern) return res.status(404).send("Not found standard code 404,it isn't here ,try something else or create");
res.send(intern);

//delete
const index = interns.indexOf(intern);
interns.splice(index,1);

res.send(intern);


//return the same course


});


function validateCourse(intern)
{

    const schema = {
        first_name: Joi.string().min(3).required()
      };
      return Joi.validate(intern, schema);

}




app.get('/api/interns/:id',(req , res) => {

let intern = interns.find(c => c.id === parseInt(req.params.id));

if(!intern) res.status(404).send("Not found standard code 404,it isn't here ,try something else or create");
res.send(intern);
});




app.get('/api/posts/:year/:month', (req , res) => {
    res.send(req.params);
    });


    



const port = process.env.PORT || 3000;
// port variable is added to change the port when one of em is not available 
app.listen(port, () => console.log(`listening on ${port}`))
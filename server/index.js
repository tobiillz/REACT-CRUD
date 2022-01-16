const express = require("express");
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: 'root',
    database: 'employee'
})
app.post('/create' , (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const phone = req.body.phone
    const email = req.body.email
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query(
        'INSERT INTO employee (name, age, phone, email, country, position, wage) Values(?,?,?,?,?,?,?)',
        [name, age, phone, email, country, position, wage] ,
        (err, result) =>{
            if (err){
                console.log(err)
            }else{
                res.send('Values Inserted')
            }
        }
        
    );
});

app.listen(8080, () =>{
    console.log('running')
});
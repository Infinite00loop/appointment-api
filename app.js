const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use('/get-user', (req,res,next)=>{
    User.findAll()
    .then((result)=>{
        res.json(result)
    })
    .catch(err=>console.log(err));
});
app.use('/insert-user', (req,res,next)=>{
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        
       User.create({
        name: name,
        phone: phone,
        email: email
       })
        .then((result) => {
          console.log('Created User');
          res.redirect('/get-user');
        })
        .catch(err => console.log(err));
    
});

app.use('/delete-user/:email', (req,res,next)=>{
    const email = req.params.email;
    console.log(email);
    User.destroy({
        where: {
          email: email
        },
      })
    .then((result)=>{
        console.log(result);
        res.redirect('/get-user')
    })
    .catch(err=>console.log(err));
});

sequelize.sync()
.then(result=>{
    //console.log(result);
    app.listen(5000);
})
.catch(err=>console.log(err));
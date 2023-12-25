const User = require('../models/user');

exports.insertUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    User.create({
      name: name,
      email: email,
      phone: phone
    })
    .then(result=>{
      //console.log(result);
      console.log('Created user');
      res.redirect('/get-user')
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.deleteUser = (req,res,next)=>{
    const email=req.params.email;
    console.log(email)
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
}

exports.getUser =(req,res,next)=>{
    User.findAll()
    .then((result)=>{
        res.json(result)
    })
    .catch(err=>console.log(err));
};
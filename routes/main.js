var express = require('express');
var router = express.Router();

/* get POST parameters. */
router.post('/', function(req, res, next) {
   var email = req.body.loginEmail;
   var password = req.body.loginPassword;
   console.log('Client email is ' + email);
   console.log('Client password is ' + password);
   res.render('main',{
    title: "Joey Chats"
   });
});




module.exports = router;

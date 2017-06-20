var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joey Chats' });
});

router.get('/main',function(req,res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/chatdb";

    MongoClient.connect(url,function(err,db){
        if (err) {
          console.log("Unable to connect to server:",err);
          throw err;

        }
        console.log("Connection Established!");
        db.close();
    });


});
module.exports = router;

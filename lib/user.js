/**
 * Created by youss on 19-Jun-17.
 */
mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email: {type: String, unique: true},
    gender: String,
    password: {type: String},
    friends: String
});
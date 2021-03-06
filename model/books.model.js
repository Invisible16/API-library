var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    title:String, // String is shorthand for {type: String}
    description: String,
    image: String,
    qtt: Number
});

// khai bao model : tên model, dùng schema nào, tên collection
var Books = mongoose.model('Books', booksSchema,'books');

module.exports=Books
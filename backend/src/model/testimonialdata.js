//accessing mongoose package
const mongoose = require('mongoose');


//ATLAS//
// mongoose.connect('');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority',{

useUnifiedTopology: true,
useNewUrlParser:true

});

//schema definition

const Schema = mongoose.Schema;


const TestimonialSchema = new Schema({

name                    : String,
position                : String,
organization            : String,
testimonial             : String,
course_title            : String,
image                   : String,
index                   : Number

});


//Model creation
var Testimonialdata = mongoose.model('testimonialdata',TestimonialSchema);

module.exports = Testimonialdata;
const mongoose = require('mongoose');

/**LOCAL BB */
 mongoose.connect('mongodb://localhost:27017/testimonials',{ useUnifiedTopology: true,useNewUrlParser:true });

//ATLAS//
// mongoose.connect('');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority');

mongoose.set('useFindAndModify',false);
const Schema = mongoose.Schema;


const TestimonialSchema = new Schema({

name                    : String,
position                : String,
organisation            : String,
testimonial             : String,
course_title            : String,
image                   : String,

});


//Model creation
var Testimonialdata = mongoose.model('testimonialdata',TestimonialSchema);

module.exports = Testimonialdata;
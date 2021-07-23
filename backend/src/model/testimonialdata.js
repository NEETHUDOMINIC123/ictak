const mongoose= require('mongoose');

/**LOCAL BB */
 mongoose.connect('mongodb://localhost:27017/Testimonials');

//ATLAS//
// mongoose.connect('');


const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({

    name                    : String,
    position                : String,
    organisation            : String,
    testimonial             : String,
    course_title            : String,
    image                   : String
});

var Testimonialdata = mongoose.model('testimonialdata',TestimonialSchema);

module.exports = Testimonialdata;
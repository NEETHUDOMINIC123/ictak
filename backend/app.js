const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const jwt= require('jsonwebtoken')

const Testimonialdata = require('./src/model/Testimonialdata');


const app = new express();
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(bodyparser.json())

const port = process.env.PORT || 3000;

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var testimonial = {       
        testimonialId : req.body.testimonialId.testimonialId,
        testimonialName : req.body.testimonial.testimonialName,
        testimonialPosition : req.body.testimonial.testimonialPosition,
        testimonial:req.body.testimonial,
        imageUrl : req.body.testimonial.imageUrl,
   }       
   var testimonial = new TestimonialData(testimonial);
   testimonial.save();
});



app.get('/testimonials',function(req,res){
    
    Testimonialdata.find()
                .then(function(testimonials){
                    res.send(testimonials);
                });
});



    app.listen(3000, function(){
        console.log('listening to port 3000');
});
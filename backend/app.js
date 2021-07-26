const express = require('express');
const cors = require('cors');
const jwt= require('jsonwebtoken')

const Testimonialdata = require('./src/model/testimonialdata');


const app = new express();
app.use(cors());
app.use(express.urlencoded({extended : true}));


const port = process.env.PORT || 5000;

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var testimonial = {       
        
        name : req.body.name,
        position : req.body.position,
        organization : req.body.organization,
        course_title  : req.body.course_title,   
        testimonial : req.body.testimonial,
        image : req.body.image,
   }       
   var testimonial = new TestimonialData(testimonial);
   testimonial.save()
});



app.get('/testimonials',function(req,res){
    
    Testimonialdata.find()
                .then(function(testimonials){
                    res.send(testimonials);
                });
});



  
  app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    TestimonialData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })


    app.listen(5000, function(){
        console.log('listening to port 5000');
});
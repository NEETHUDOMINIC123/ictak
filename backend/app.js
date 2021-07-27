const express = require('express');
const cors = require('cors');
const jwt= require('jsonwebtoken')
const path = require('path');
const bodyparser =require('body-parser');
const Testimonialdata = require('./src/model/testimonialdata');
const multer = require('multer')



const app = new express();
app.use(cors());
app.use(express.json())
app.use(bodyparser.json());


const port = process.env.PORT || 5000;

//insert
app.post('/insert',function(req,res){

  const destn = path.join(__dirname, '../',  'Admin-Dashboard-master', 'src', 'assets', 'images');
  console.log(destn);
  var storage =   multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, destn);
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
    });
  var upload = multer({ storage : storage}).single('file');

  upload(req,res,function(err) {
      if(err) {
          console.log("Error uploading file.");
      }
   
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

});

//getting data

app.get('/testimonials',function(req,res){
    
    Testimonialdata.find()
                .then(function(testimonials){
                    res.send(testimonials);
                });
});
app.get('/testimonial/:id',  (req, res) => {
  
  const id = req.params.id;
    TestimonialData.findOne({"_id":id})
    .then((testimonial)=>{
        res.send(testimonial);
    });
})



 //deleting data
app.post('/Testimonial/remove',(req,res)=>{  
  console.log(req.body);
  id         = req.body._id
  console.log(` inside remove ${id}`);
  TestimonialData.deleteOne({'_id' : id})
  .then(function(testimonial){
      console.log('success')
      res.send(true);
  });

});

///updating testimonial 
app.post('/testimonial/update',(req,res)=>{

  console.log(` inside update ${req.body.id}`);
        id          = req.body._id,
        name        = req.body.name,
        position = req.body.position,
        organization      = req.body.organization,
        testimonial  = req.body.testimonial,
        image       = req.body.image
        TestimonialData.findByIdAndUpdate({"_id":id},
                              {$set:{"name":name,
                              "position":position,
                              "organization":organization,
                              "testimonial":testimonial,
                              "image":image}})
 .then(function(){
     res.send();
 })

});
app.post('/testimonial/updateWithFile',(req,res)=>{

  console.log(` inside updateWithFile ${req.body}`)
  const destn = path.join(__dirname, '../',  'Admin-Dashboard-master', 'src', 'assets', 'images');
  console.log(destn);
  var storage =   multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, destn);
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
    });
  var upload = multer({ storage : storage}).single('file');
  upload(req,res,function(err) {

      if(err) {
          console.log("Error uploading file.");
      }
      console.log("File is uploaded");
      // console.log(`the title is ${req.body.title}`);
  console.log(` inside update with image ${req.body.name}`);
  id          = req.body._id,
        name  = req.body.name,
  position = req.body.position,
  organization       = req.body.organization,
  testimonial        =req.body.testimonial,
  image       = req.body.image
  StaffData.findByIdAndUpdate({"_id":id},
                              {$set:{"name":name,
                              "position":position,
                              "organization":organization,
                              "image":image}})
 .then(function(){
     res.send();
 })
});
});




    app.listen(5000, function(){
        console.log('listening to port 5000');
});
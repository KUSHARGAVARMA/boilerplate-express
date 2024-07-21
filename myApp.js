let express = require('express');
let app = express();
require('dotenv').config()

pathToStaticFile = __dirname+"/public"
pathToHtmlFile = __dirname+"/views/index.html"


//middleware for all the methods printing the logs in manner method path - ip
app.use((req,res,next)=>{
    console.log(req.method+" "+req.path+" "+"-"+" "+req.ip);
    next();
})
// serving html file to first route 
app.get('/',(req,res)=>{
    res.sendFile(pathToHtmlFile)
})

//Middleware call on public route 
app.use('/public',express.static(pathToStaticFile))

//adding a  json to be sent on the /json route 
app.get('/json',(req,res)=>{
   styleCase = process.env.MESSAGE_STYLE
    console.log(styleCase);
    if(styleCase === "uppercase"){

    res.send(
      { "message": "HELLO JSON"}
    )
    }
    else{
        res.send(
            {"message": "Hello json"}
        )

    }    
})
//chaining the middlewares 
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send({time:req.time});
  });

//parameters and fetch them  using req.params

app.get('/:word/echo',(req,res)=>{
word= req.params.word
res.send({"echo":word})
})

//query and fetch them using req.query

app.get('/name',(req,res)=>{
    // firstname= req.query.first
    // lastname=req.query.last
    res.send({"name":`${req.query.first} ${req.query.last}`})
})

 module.exports = app;

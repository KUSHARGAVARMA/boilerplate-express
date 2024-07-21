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


 module.exports = app;

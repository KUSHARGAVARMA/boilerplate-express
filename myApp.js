let express = require('express');
let app = express();

pathToStaticFile = __dirname+"/public"
pathToHtmlFile = __dirname+"/views/index.html"

app.get('/',(req,res)=>{
    res.sendFile(pathToHtmlFile)
})

app.use('/public',express.static(pathToStaticFile))



 module.exports = app;

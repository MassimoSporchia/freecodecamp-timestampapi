var express = require("express");
var app = express();

app.get('/*',function(req,res){
   var p0 = req.params[0];
   if ( p0 != null){
       try{
        var date = new Date(p0)   
       }catch(err)
       {
           res.send({unix: null, natural: null});
            res.end();
       }

       res.send ( {unix: date.getTime(), natural: date})
       res.end();
   }else{

   res.send({unix: null, natural: null});
            res.end();
   }
   
});

app.listen(8080);
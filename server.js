var express = require("express");
var app = express();

app.get('/*',function(req,res){
   var p0 = req.params[0];
   if ( p0 != null){
       try{
           if ( !parseInt(p0) )
            var date = new Date(p0);
            else 
        var date = new Date(p0 * 1000);  
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

var port = process.env.PORT || 80;
app.listen(port);
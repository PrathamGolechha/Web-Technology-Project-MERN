
const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const app =express();
var r=[];

app.use(function(req,res,next)
{
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type,Accept,Authorization,Origin");
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Credentials",true);
  next();
});


app.get('/restaurants/MG%20Road',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "MG Road" };
      var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/restaurants/Indiranagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Indiranagar" };
     var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/restaurants/Jayanagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Jayanagar" };
    var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)


  db.close();
  });
});
})

app.get('/restaurants/Kormangala',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Kormangala" };
   var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/restaurants/Basavanagudi',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Basavanagudi" };

   var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
  //res.send(s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]+s[8]+s[9])

  db.close();
  });
});
})

app.get('/restaurants/Banashankri',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Banashankri" };

   var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/restaurants/JP%20Nagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "JP Nagar" };
   var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/restaurants/Frazer%20Town',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Frazer Town" };
     var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/restaurants/Whitefield',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Whitefield" };
      var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/restaurants/Electronic%20City',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Electronic City" };
     var cursor = dbo.collection("restaurants").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})


app.get('/cinema/MG%20Road',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "MG Road" };
      var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/cinema/Indiranagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Indiranagar" };
     var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/cinema/Jayanagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Jayanagar" };
    var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)


  db.close();
  });
});
})

app.get('/cinema/Kormangala',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Kormangala" };
   var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/cinema/Basavanagudi',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Basavanagudi" };

   var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
  //res.send(s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]+s[8]+s[9])

  db.close();
  });
});
})

app.get('/cinema/Banashankri',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Banashankri" };

   var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/cinema/JP%20Nagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "JP Nagar" };
   var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/cinema/Frazer%20Town',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Frazer Town" };
     var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/cinema/Whitefield',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Whitefield" };
      var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/cinema/Electronic%20City',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Electronic City" };
     var cursor = dbo.collection("cinema").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})


app.get('/gaming/MG%20Road',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "MG Road" };
      var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/gaming/Indiranagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Indiranagar" };
     var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/gaming/Jayanagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Jayanagar" };
    var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)


  db.close();
  });
});
})

app.get('/gaming/Kormangala',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Kormangala" };
   var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gaming/Basavanagudi',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Basavanagudi" };

   var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
  //res.send(s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]+s[8]+s[9])

  db.close();
  });
});
})

app.get('/gaming/Banashankri',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Banashankri" };

   var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gaming/JP%20Nagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "JP Nagar" };
   var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gaming/Frazer%20Town',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Frazer Town" };
     var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gaming/Whitefield',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Whitefield" };
      var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gaming/Electronic%20City',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { area: "Electronic City" };
     var cursor = dbo.collection("gaming").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})




app.get('/malls/MG%20Road',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "MG Road" };
      var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/malls/Indiranagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Indiranagar" };
     var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/malls/Jayanagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Jayanagar" };
    var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)


  db.close();
  });
});
})

app.get('/malls/Kormangala',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Kormangala" };
   var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/malls/Basavanagudi',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Basavanagudi" };

   var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
  //res.send(s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]+s[8]+s[9])

  db.close();
  });
});
})

app.get('/malls/Banashankri',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Banashankri" };

   var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/malls/JP%20Nagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "JP Nagar" };
   var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/malls/Frazer%20Town',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Frazer Town" };
     var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/malls/Whitefield',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Whitefield" };
      var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/malls/Electronic%20City',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Electronic City" };
     var cursor = dbo.collection("malls").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})



app.get('/gyms/MG%20Road',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "MG Road" };
      var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/gyms/Indiranagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Indiranagar" };
     var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
    db.close();
  });
});
})

app.get('/gyms/Jayanagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Jayanagar" };
    var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)


  db.close();
  });
});
})

app.get('/gyms/Kormangala',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Kormangala" };
   var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gyms/Basavanagudi',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Basavanagudi" };

   var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)
  //res.send(s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]+s[8]+s[9])

  db.close();
  });
});
})

app.get('/gyms/Banashankri',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Banashankri" };

   var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gyms/JP%20Nagar',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "JP Nagar" };
   var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gyms/Frazer%20Town',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Frazer Town" };
     var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gyms/Whitefield',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Whitefield" };
      var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/gyms/Electronic%20City',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
     var query = { location: "Electronic City" };
     var cursor = dbo.collection("gyms").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

app.get('/resorts',(req,res,next)=>{
  MongoClient.connect(url,{useUnifiedTopology : true}, function(err,db) {
   if (err) throw err;
   var dbo = db.db("web-project");
    var query={ _id: {$gt:261} }
     var cursor = dbo.collection("resorts").find(query).toArray(function(err, result) {
     if (err) throw err;
     r=result;
     res.send(r)

  db.close();
  });
});
})

console.log('Server connected to Database and Running!');
console.log('Server Running on port 5000');
app.listen(5000);

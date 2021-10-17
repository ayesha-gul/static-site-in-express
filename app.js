let express = require("express");
let app = express();
 let path = require("path");

 //let serveStatic = path.join('app.js', 'public','khali.html');
 //let secStatic = path.join("app.js", "../about page");
 


//app.use(express.static(serveStatic))
app.get("/", (req,res) => {
  //  let serve = app.use(express.static(serveStatic));
      res.sendFile(path.join(__dirname,"public","khali.html"));
});

app.get("/about", (req,res) => {
    //  let serve = app.use(express.static(serveStatic));
    res.sendFile(path.join(__dirname,"public","about", 'index.html'));
  });
//app.use(express.static(secStatic))
// app.get("/about", (req,res) => {
//     res.send("hello about page");
// });

app.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port no 8000!")
});
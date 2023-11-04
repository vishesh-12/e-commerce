const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res){
    res.send("This is home route");
})
app.get("/login", function(req, res){
    res.render('login');
})

app.listen(5000, function(){
    console.log('server is running on port 5000');
});
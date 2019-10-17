const express = require("express");
const app = express();
app.set('view engine','pug');

app.get("/",(req,res) => {
    res.render('template', {title : 'proofToNight',message : 'Nessun Dorma!'});
});

app.listen(3000,() => {
    console.log("Server on port 3000");
});
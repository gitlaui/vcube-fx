const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/fx', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

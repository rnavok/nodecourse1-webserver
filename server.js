const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currentYear',()=>{
    return new Date().getFullYear();
})
var app = express();

app.set('view engien','hbs');


app.use((req,res,next) => {
    console.log(`${new Date().toString()}: ${req.method} ; ${req.url} `)
     next();
});

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
    // res.render('underConstraction.hbs')
     next();
});



app.get('/',(req,res) => {
   res.render('home.hbs',{
        welcomeMessage:'welcome to my page',
        pageTitle:'HomePage ',
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle:'About page ',
    });
});


app.get('/bad',(req,res)=>{
    res.send('<h1>bad handing of request</h1>');
})
app.listen(3000);


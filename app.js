// console.log(22);

const express = require('express');
const app = express();

const hndlBrs = require('express-handlebars');
const path = require('path');

//middleware

// app.use(function (req,res,next) {
//     console.log('I AM HERE');
//     next();
// });
//
// app.get('/',(ref,res)=>{
//     res.end('OK')
// });
//
// app.get('/info',(ref,res)=>{
//     res.end('info')
// });
//
// app.use(function (req,res,next) {
//     console.log('I AM HERE');
//    res.end('404');
// });
//
// app.listen(3000,(err)=>{
//     console.log('Listen 3000 .....')
// })

//middleware різні обробники на один і той же роут

// app.use(function (req,res,next) {
//     console.log('I AM HERE');
//     next();
// });
//
// app.get('/',(ref,res,next)=>{
//     res.write('hello\n');
//     next();
// });
//
// app.get('/',(ref,res)=>{
//     res.end('privet')
// });
//
// app.use(function (req,res,next) {
//     console.log('I AM HERE');
//     res.end('404');
// });
//
// app.listen(3000,(err)=>{
//     console.log('Listen 3000 .....')
// })

//middleware для певних роутів

// app.use(function (req, res, next) {
//     console.log('I AM HERE');
//     next();
// });
//
// app.get('/', function (req, res, next) {
//     console.log(22);
//     next()
// }, (ref, res) => {
//     res.end('helouuuuuuuuuuu')
// });
//
// app.listen(3000, (err) => {
//     console.log('Listen 3000 .....')
// });

//path

// app.get('/',(req,res)=>{
//     let currPath = path.join(__dirname,'public','view','main');
//
//     let badPath = 'c://Users\\\\///vic/\WebStorm\\EXP>NODE app.js';
//     let goodPath = path.normalize(badPath);
//     console.log(goodPath);
//
//     console.log(currPath);
//     res.end('hellooooooooo')
// })
//
// app.listen(3000, (err) => {
//     console.log('Listen 3000 .....')
// });

app.use(express.static(path.join(__dirname,'public','view')));
app.set('view engine','.hbs');
app.engine('.hbs',hndlBrs({
    extname: '.hbs'
}));
app.get('/',(req,res)=>{
    res.render('main')
})
app.listen(3000, (err) => {
    console.log('Listen 3000 .....')
});
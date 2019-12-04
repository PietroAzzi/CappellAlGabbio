const express = require('express');
const app = express();  
const pirati = require('./lego.json');

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template(sostituisco html)

app.use(express.static(__dirname + '/public')); // Dico ad express dove prendere i file statici

    app.get('/', (req, res) => {
  res.render('index', {
    vettoreJSON: pirati.lego //Passa il vettore LEGO(vettore di oggetti JSON) alla pagina index.pug
  });
});

app.get('/istruzioni',(req,res) => {
  var Pirates = pirati.lego.find(LEGO => LEGO.SetNumber==req.query.id);
console.log(Pirates);
  res.render('istruzioni',{Pirates});

})


app.listen(3000, function () {
 console.log('Il server è online');
});
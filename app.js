require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware: Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Oscar Cornejo',
    titulo: 'WebServer',
  });
});

app.get('/generic', (req, res) => {
  //   res.sendFile(__dirname + '/public/generic.html');
  res.render('generic', {
    nombre: 'Oscar Cornejo',
    titulo: 'WebServer',
  });
});

app.get('/elements', (req, res) => {
  //   res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    nombre: 'Oscar Cornejo',
    titulo: 'WebServer',
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
  console.log(`Corriendo en: http://localhost:${port} 🚀`);
});

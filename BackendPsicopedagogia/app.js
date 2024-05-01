const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const personaRouter = require('./routes/persona');
const usuarioRouter = require('./routes/usuario');
const actividadesRouter = require('./routes/actividades');

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(cors({
  origin: 'http://localhost:8080' // Solo permite solicitudes de este origen
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/persona-graduado', personaRouter);
app.use('/usuarios', usuarioRouter);
app.use('/actividades', actividadesRouter);



app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
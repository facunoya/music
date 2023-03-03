const express = require('express');
const app = express();
const session = require('express-session');
const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.static('public'));
app.use(session({secret: 'Mi string secreto'}));
app.use(mainRoutes)




app.listen(3005, () => {
    console.log('Aplicación corriendo en puerto 3005')
});
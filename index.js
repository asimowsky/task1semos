const express = require('express');
const mongoose = require('mongoose');
const pages = require('./handlers/pages');
const callbacks = require('./handlers/callbacks');

const dsn = 'mongodb+srv://kebirasim:FylDYGnLIX2Uz1fW@cluster0.lhgafjv.mongodb.net/Faculty?retryWrites=true&w=majority'

mongoose.connect(dsn);

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', pages.main);
app.get('/faculty_add', pages.facultyAdd);
app.get('/faculty_edit/:id', pages.facultyEdit);

app.post('/post/add', callbacks.create);
app.post('/post/edit/:id', callbacks.update);
app.delete('/post/delete/:id', callbacks.remove);

app.listen(8080, err => {
    if (err) return console.log(err);
    console.log('Server successfully started...');
});

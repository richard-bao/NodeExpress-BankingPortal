const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const { accounts, users, writeJSON } = require('./data');
const accountRouters = require('./routes/accounts');
const servicesRouters = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.use('/account', accountRouters);
app.use('/services', servicesRouters);

app.get('/profile', (req, res) => {
    res.render('profile', { user: users[0] });
});

app.listen(3000, () => console.log('PS Project runing on port 3000!'));


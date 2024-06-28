const express = require('express');
const app = express();

const cors = require('cors');
const controller = require('./controller');

app.use(cors()); // unblock cross origin shareing on browser
app.use(
    express.urlencoded({extended: true})
);
app.use(express.json());


app.get('/users', (req, res) => {
    controller.getUsers(req, res, next => {
        res.send();
    });
});

app.post('/addUser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.post('/updateUser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteUser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;
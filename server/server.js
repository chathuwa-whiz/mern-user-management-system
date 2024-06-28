const app = require('./app');
const mongoose = require('mongoose');
const router = require('./router');

const port = 3001;
const host = '127.0.0.1';

const server = app.listen(port, host, () => {
    console.log(`Node server is Listening to ${server.address().port}`);
});

const uri = 'mongodb+srv://navod:navod2002@mern.4dtaoqa.mongodb.net/?retryWrites=true&w=majority&appName=MERN';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to mongodb');
    } catch (error) {
        console.log('Mongodb Error: ', error);
    }
}

connect();

app.use('/api', router);
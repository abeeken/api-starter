const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9000;
const url = require('./config/dbConfig');

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const conn = mongoose.connection;

app.use(express.json());

try{
    conn.on('open',() => {
        console.log('Database connected');
    })
}catch(error)
{
    console.log("Database error: "+error);
}

const noteRouter = require('./routes/noteRoutes');
app.use('/notes', noteRouter);

app.listen(port, () =>{
    console.log('Server started on port '+port);
})
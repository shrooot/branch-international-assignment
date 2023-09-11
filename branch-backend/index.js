
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const messageRouter = require('./routes/message.route')
const userRouter = require('./routes/user.route')
const agentRouter = require('./routes/agent.route')
// const threadRouter = require('./routes/')

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use("/message", messageRouter)
app.use("/user", userRouter)
app.use("/agent", agentRouter)


const uri = process.env.mongo_uri;
const PORT = 8080
const HOST = "localhost"

mongoose.connect(
    uri,
    { useNewUrlParser: true }
);

// Check if the connection is established and once it is print a statement that will let us know the status

mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => {
        console.log('Your error ', error);
    });



const server = app.listen(PORT, function () {
    console.log(`listening at http://${HOST}:${PORT}`);
});




const cron = require('node-cron');
const cors = require('cors');
const express = require('express');
const Getter = require("./routes/get-users")
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Twitter_User = require('./model/twitter-user')
const {fetch_users} = require("./helper/fetch-users");

const app = express();
app.use(bodyParser.json());
const corsOptions = {
    exposedHeaders: ['token', 'Authorization ', 'Content-Type', 'Host']
};
app.use(cors(corsOptions));
app.set('trust proxy', true)

app.use("/cron", Getter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://doadmin:8u745b6wnIp29lE1@twitter-users-database-0137989b.mongo.ondigitalocean.com/twitter?authSource=admin&replicaSet=twitter-users-database&tls=true&tlsCAFile=./certificate/ca-certificate.crt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
};

let taskRunning = false
start().then(async () => {
    // Schedule tasks to be run on the server.
    console.log(`server started`)
    cron.schedule('*/5 * * * *', async function() {
        if (taskRunning) {
            return
        }
        taskRunning = true
        const twitter_user = await Twitter_User.findOne({visited: false});
        if (twitter_user) {
            twitter_user.visited = true;
            const users = await fetch_users(twitter_user.twitter_id).catch(e => console.log(e))
            if (users.length > 0) {
                await new Promise(resolve => {
                    Twitter_User.collection.insertMany(users, {ordered: false}, function (err,result) {
                        resolve(result);    // Otherwise resolve

                    });
                });
                console.log(`added ${users.length} users`)
            }
            await twitter_user.save()
        }

        taskRunning = false
    });
    app.listen(3000);
})
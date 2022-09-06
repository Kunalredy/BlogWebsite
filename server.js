import express from 'express';
 import dotenv from 'dotenv';
 import cors from 'cors';
 import bodyParser from 'body-parser';

// //components
 import Connection from './database/db.js';
 import Router from './routes/route.js';


 dotenv.config();

const app = express();

 app.use(cors());
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/', Router);

 if(process.env.NODE_ENV==='production'){
    app.use(express.static("client/build"))
 }

const PORT = process.env.PORT||8000;
 const username = process.env.DB_USERNAME;
 const password = process.env.DB_PASSWORD;

 app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

 const URL = process.env.Mongodb_URI||`mongodb://${username}:${password}@ac-yaaz9m1-shard-00-00.ay7dhxd.mongodb.net:27017,ac-yaaz9m1-shard-00-01.ay7dhxd.mongodb.net:27017,ac-yaaz9m1-shard-00-02.ay7dhxd.mongodb.net:27017/?ssl=true&replicaSet=atlas-9rttpb-shard-0&authSource=admin&retryWrites=true&w=majority`

 Connection(URL);


import express from "express";
let app = express();
import bodyParser from "body-parser";
import dontenv from "dotenv";
dontenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/auth/clients',require('./routes/auth/clients/signup'))
app.use('/auth/clients',require('./routes/auth/clients/login'))

app.use('/auth/riders',require('./routes/auth/riders/signup'))

app.listen(3001, () => {
  console.log("listening on port 30000");
});

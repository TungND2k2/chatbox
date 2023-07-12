import express from 'express';
import viewEngine from "./config/viewEngine";
import initWeb from "./router/web";
import bodyParser from 'body-parser';
require("dotenv").config();

let app = express();

// config app
viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web router
initWeb(app);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('listening on port port ' + port);
});
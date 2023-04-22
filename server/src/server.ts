import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from "path";
import {api} from "./api";
const bodyParser = require('body-parser')
const session = require('express-session');
const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const secret = process.env.SESSION_SECRET

/*https://codeshack.io/basic-login-system-nodejs-express-mysql/*/
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
}));

api.forEach((route) => {
    app[route.method]('/api' + route.route, async (req: Request, res: Response) => {
        console.log('/api' + route.route + ' (' + route.method.toUpperCase() + ')');
        res.set('Access-Control-Allow-Origin', '*'); // DEV ONLY
        route.handler(req, res);
    });
})

app.use(express.static(__dirname));
app.get('/*', function (req, res) {
    res.setHeader("Content-Type", "text/html");
    const pathok = path.join(__dirname, 'index.html')
    console.log(pathok)
    res.sendFile(pathok);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

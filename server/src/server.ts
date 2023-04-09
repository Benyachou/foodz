import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from "path";
import {api} from "./api";
const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
api.forEach((route) => {
    app[route.method]('/api' + route.route, async (req: Request, res: Response) => {
        console.log('/api' + route.route + ' (' + route.method.toUpperCase() + ')');
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

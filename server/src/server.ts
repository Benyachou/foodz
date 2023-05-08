import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from "path";
import {api} from "./routes/api";
import {web} from "./routes/web";
import {authMiddleware} from "./middleware/auth";
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

// API //
api.forEach((route) => {
    app[route.method]('/api' + route.route, async (req: Request, res: Response) => {

        let status = 200;
        let object = {};
        res.set('Access-Control-Allow-Origin', '*'); // DEV ONLY

        const controller = async() => {
            const json = await route.controller(req, res)
            if (typeof json.status !== 'undefined' && typeof json.jsonRep !== 'undefined'){
                status = json.status
                object = json.jsonRep
            } else {
                object = json
            }
            console.log(`[API] [${route.method.toUpperCase()}] /api${route.route}`);
            res.status(status).json(object);
        }

        if (route.auth) {
            await authMiddleware(req, res,controller)
        } else {
            await controller()
        }
    });
})

app.use(express.static(__dirname));

// WEB //
web.forEach((route:any) => {
    app.get('/' + route.route, async (req: Request, res: Response) => {
        console.log(`[WEB] [${route.method.toUpperCase()}] /api${route.route}`);
        res.set('Access-Control-Allow-Origin', '*'); // DEV ONLY
        const fileName = await route.controller(req, res)
        const htmlFile = path.join(__dirname, fileName + '.html')
        res.status(200).sendFile(htmlFile);
    });
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

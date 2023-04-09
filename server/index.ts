import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
/*
import * as fs from "fs";
import {writeAddJsonFile} from "./utils/writeAddJsonFile";
const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/recettes', async(req: Request, res: Response) => {
    console.log('/ (GET) recettes')

    res.set('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(fs.readFileSync("../data/recettes.json").toString()));
});

app.post('/api/add-recettes', async(req: Request, res: Response) => {
    console.log('/ (POST) recettes')

    const response = await writeAddJsonFile({
        name: req.body.name,
        calories: parseInt(req.body.calories),
        ingredients: req.body.ingredients.split(',').map((id:string) => parseInt(id))
    },"../data/recettes.json");

    res.set('Access-Control-Allow-Origin', '*');
    res.json(response)
});

app.get('/api/ingredients', async(req: Request, res: Response) => {
    console.log('/ (GET) ingredients')

    res.set('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(fs.readFileSync("../data/ingredients.json").toString()));
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
*/


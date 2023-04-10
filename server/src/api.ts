import fs from "fs";
import {Api} from "./types/api";
import {writeAddJsonFile} from "./utils/writeAddJsonFile";

export const api:Api = [
	{
		"method": "post",
		"route": "/login",
		"handler": async(req,res) => {

			req.body.email
			req.body.password



			res.set('Access-Control-Allow-Origin', '*');
			res.json(JSON.parse(fs.readFileSync("../data/recettes.json").toString()));
		}
	},
	/*{
		"method": "get",
		"route": "/user",
		"handler": async(req,res) => {
			res.set('Access-Control-Allow-Origin', '*');
			res.json(JSON.parse(fs.readFileSync("../data/recettes.json").toString()));
		}
	},*/
	{
		"method": "get",
		"route": "/recettes",
		"handler": async(req,res) => {
			res.set('Access-Control-Allow-Origin', '*');
			res.json(JSON.parse(fs.readFileSync("../data/recettes.json").toString()));
		}
	},
	{
		"method": "post",
		"route": "/add-recettes",
		"handler": async(req,res) => {
			const response = await writeAddJsonFile({
				name: req.body.name,
				calories: parseInt(req.body.calories),
				ingredients: req.body.ingredients.split(',').map((id:string) => parseInt(id))
			},"../data/recettes.json");

			res.set('Access-Control-Allow-Origin', '*');
			res.json(response)
		}
	},
	{
		"method": "get",
		"route": "/ingredients",
		"handler": async(req,res) => {
			res.set('Access-Control-Allow-Origin', '*');
			res.json(JSON.parse(fs.readFileSync("../data/ingredients.json").toString()));
		}
	}
]
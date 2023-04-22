import {Api} from "./types/api";
import {create, getAll} from "./utils/orm";
/*const passport = require('passport');*/

export const api:Api = [
	{
		"method": "post",
		"route": "/auth",
		"handler": async(req,res) => {

			await create("../data/logs.json",{
				email:req.body.email,
				password:req.body.password
			});

			req.session.loggedin = true;
			req.session.username = 'julien viatge';

			res.json({"status": "error"});
		}
	},
	{
		"method": "post",
		"route": "/logout",
		"handler": async(req,res) => {
			req.session = null;
			res.json({"status": "ok"});
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

			let recettes = getAll("../data/recettes.json");

			if (req.query.ingredients){
				const ingredients = req.query.ingredients.split(',').map((id:string) => parseInt(id))
				recettes.data = recettes.data.filter((recette:any) => recette.ingredients.some((id:number) => ingredients.includes(id)))
			}

			if (req.query.calories){
				const calories = parseInt(req.query.calories)
				console.log(req.query)
				recettes.data = recettes.data.filter((recette:any) => recette.calories === calories)
			}

			if (req.query.name){
				const name = req.query.name.toLowerCase()
				recettes.data = recettes.data.filter((recette:any) => recette.name.toLowerCase().includes(name))
				res.json(recettes);
				return;
			}

			res.json(recettes);
		}
	},
	{
		"method": "post",
		"route": "/add-recettes",
		"handler": async(req,res) => {
			const response = await create("../data/recettes.json",{
				name: String(req.body.name),
				calories: parseInt(req.body.calories),
				ingredients: String(req.body.ingredients).split(',').map((id:string) => parseInt(id))
			});
			res.json(response)
		}
	},
	{
		"method": "get",
		"route": "/ingredients",
		"handler": async(req,res) => {
			res.json(getAll("../data/ingredients.json"));
		}
	}
]
import {ingredients, recettes, auth} from "../controllers";
import {Api} from "../types/api";
import {testController} from "../controllers/testController";
export const api:Api = [
	{
		method: "get",
		route: "/recettes",
		controller: recettes.getAll,
		auth: true
	},
	{
		method: "post",
		route: "/add-recettes",
		controller: recettes.store,
		auth: true
	},
	{
		method: "get",
		route: "/ingredients",
		controller: ingredients.getAll,
		auth: true
	},
	{
		method: "delete",
		route: "/delete-recette",
		controller: recettes.destroy,
	},
	// AUTH //
	{
		method: "post",
		route: "/login",
		controller: auth.login
	},
	{
		method: "post",
		route: "/logout",
		controller: auth.logout
	}
]
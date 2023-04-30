import {ingredients, recettes, auth} from "../controllers";
import {Api} from "../types/api";
import {testController} from "../controllers/testController";
export const api:Api = [
	// TEST //
	{
		method: "get",
		route: "/test",
		controller: testController.get
	},
	// TEST //
	{
		method: "get",
		route: "/recettes",
		controller: recettes.getAll
	},
	{
		method: "post",
		route: "/add-recettes",
		controller: recettes.store
	},
	{
		method: "get",
		route: "/ingredients",
		controller: ingredients.getAll
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
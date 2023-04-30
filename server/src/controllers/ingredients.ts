import {jsonFManager} from "../utils/jsonManager";

class ingredients extends jsonFManager{
	public static async get(){
	}

	public static async getAll(req:any,res:any) {
		return super.jsonGetAll("ingredients")
	}

	public static async create() {

	}

	public static async edit() {

	}
}

export {ingredients}
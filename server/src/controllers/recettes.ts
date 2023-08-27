import {jsonFManager} from "../utils/jsonManager";
import {StringToArrayInt} from "../utils/array";
class recettes extends jsonFManager{

	public static async get() {
		let recettes = await super.jsonGetOne("recettes",["id",1])
	}

	public static async getAll(req:any,res:any) {

		let recettes = await super.jsonGetAll('recettes')

		if (req.query.ingredients){
			const ingredients = req.query.ingredients.split(',').map((id:string) => parseInt(id))
			recettes.data = recettes.data.filter((recette:any) =>
				recette.ingredients.some((id:number) => ingredients.includes(id)))
		}

		if (req.query.calories){
			const calories = parseInt(req.query.calories)
			recettes.data = recettes.data.filter((recette:any) =>
				recette.calories === calories)
		}

		if (req.query.name){
			const name = req.query.name.toLowerCase()
			recettes.data = recettes.data.filter((recette:any) =>
				recette.name.toLowerCase().includes(name))
			return recettes
		}

		return recettes
	}

	public static async store(req:any,res:any){

		const { name, calories, ingredients, recette } = req.body;

		console.log(req.body)

		return await super.jsonCreate("recettes",{
			name: String(name),
			calories: parseInt(calories),
			ingredients: StringToArrayInt(ingredients),
			recette: String(recette),
		});
	}

	public static async edit() {

	}

	public static async destroy(req:any,res:any) {
		const { id } = req.body;
		return await super.jsonDeleteOne("recettes",id);
	}
}

export {recettes}
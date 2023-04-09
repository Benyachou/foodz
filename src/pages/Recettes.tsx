import {Loading, Modal} from "../components";
import {useGet, usePost} from "../hooks";
import {Card} from "../components/Card";
import {AddUpdateRecette} from "../partials/forms/AddUpdateRecette";
import {SearchBar} from "../partials/SearchBar";
import RecettesGlobal from "../contexts/recettes.context";
import {useEffect, useState} from "react";

const Recettes = () => {

	const [ingredients,loadIngredients] = useGet({path:"http://localhost:5001/api/ingredients",start:true});
	const [recettes,loadRecettes,runGetRecette] = useGet({path:"http://localhost:5001/api/recettes",start:false});
	const [result, loadPostRecette, runPostRecette] = usePost({
		path:"http://localhost:5001/api/add-recettes",
		start:false,
	})
	const [searchValue, setSearchValue] = useState("")

	const value = {
		ingredients,
		loadIngredients,
		recettes,
		loadRecettes,
		runGetRecette,
		result,
		loadPostRecette,
		runPostRecette
	}

	useEffect(() => runGetRecette(null), []);

	return (<RecettesGlobal.Provider value={value}>

		<SearchBar />

		<Modal
			title="Ajouter une recette"
			buttonValidate="Ajouter"
			buttonCancel="Annuler"
			validateAction={async(e) => {
				const form = e.target
				const elements = form.elements
				const newRecette = {
					name: elements.name.value,
					calories: elements.calories.value,
					ingredients: elements.ingredients.value,
				}
				runPostRecette(newRecette,() => runGetRecette())
			}}
		>
			<AddUpdateRecette />
		</Modal>

		<div className='container'>
			{loadRecettes || loadIngredients ?
				<Loading />
				:
				<>
					{recettes?.data.map((recette:any) => <Card key={recette.id} recette={recette} />)}
				</>
			}
		</div>

		</RecettesGlobal.Provider>)
}


export {Recettes}
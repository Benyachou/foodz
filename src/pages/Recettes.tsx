import {Loading, Modal} from "../components";
import {Card} from "../components/Card";
import {SearchBar} from "../partials/SearchBar";
import {useIngredients, useRecettes} from "../hooks/apiHook";
import {global} from "../store";
import {useEffect} from "react";
import {AddUpdateRecette} from "../partials/forms";
import {useAtom} from "jotai";

const Recettes = () => {

	const [Global,setGlobal] = useAtom(global)
	const ingredients = useIngredients()
	const {
		fetchGetRecette,
		fetchPostRecette
	} = useRecettes()

	const recettes = fetchGetRecette()
	const postRecette = fetchPostRecette()

	useEffect(() => {
		ingredients.data && setGlobal({ ...Global, ingredients: ingredients.data })
	},[ingredients.isLoading])


	return (
		<div className='container'>

			<SearchBar />

			<Modal
				title="Ajouter une recette"
				buttonValidate="Ajouter"
				buttonCancel="Annuler"
				validateAction={async(e) => {

					const formData = new FormData(e.currentTarget)

					const newRecette = {
						name: String(formData.get('name')),
						calories: Number(formData.get('calories')),
						ingredients: formData.get('ingredients'),
					}

					postRecette.mutate(newRecette)
				}}
			>
				<AddUpdateRecette />
			</Modal>

			{recettes.isLoading ?
				<Loading />
				:
				<>
					{recettes.data?.map((recette:any) => <Card key={recette.id} recette={recette} />)}
				</>
			}

		</div>
	)
}


export {Recettes}
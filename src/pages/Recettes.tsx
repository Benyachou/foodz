import {useEffect, useState} from "react";
import {useAtom} from "jotai";

import {global} from "../store";
import {useIngredients, useRecettes} from "../hooks/apiHook";
import {Loading, Modal} from "../components";
import {Card} from "../components/Card";
import {SearchBar} from "../partials/SearchBar";
import {AddUpdateRecette} from "../partials/forms";

const Recettes = () => {

	const [Global,setGlobal] = useAtom(global)
	const [search, setSearch] = useState({});
	const ingredients = useIngredients()
	const {
		fetchGetRecette,
		fetchPostRecette
	} = useRecettes()

	const recettes = fetchGetRecette(search)
	const postRecette = fetchPostRecette()
	const [addModal, setAddModal] = useState(false);

	useEffect(() => {
		ingredients.data && setGlobal({ ...Global, ingredients: ingredients.data })
	},[ingredients.isLoading])

	return (
		<div className='container'>

			<Modal
				open={addModal}
				setOpen={setAddModal}
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

			<div className={'w-full flex justify-center items-center pt-4'}>
				<button className={"btn"} onClick={() => setAddModal(true)}>Ajouter</button>
			</div>

			<SearchBar
				setSearch={setSearch}
				search={search} />

			{recettes.isLoading ?
				<Loading />
				:
				<>
					{recettes.data?.map((recette:any,index:number) =>
						<Card
							key={recette.id}
							index={index}
							recette={recette}
							onClickDelete={() => {}}
							onClickUpdate={() => {setAddModal(true)}}
						/>
					)}
				</>
			}

		</div>
	)
}


export {Recettes}
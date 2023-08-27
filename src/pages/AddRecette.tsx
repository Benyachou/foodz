import {AddUpdateRecette} from "../partials/forms";
import {useRecettes} from "../hooks/apiHook";
import {useNavigate} from "react-router-dom";
const AddRecette = () => {

	const {
		fetchPostRecette
	} = useRecettes()

	const postRecette = fetchPostRecette()

	const navigate = useNavigate();

	return (
		<div className={'container'}>

			<div className="py-4 flex items-start justify-center border-b rounded-t dark:border-gray-600">
				<h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
					Nouvelle recette
				</h1>
			</div>

			<form
				className="py-8 space-y-6"
				onSubmit={(e) => {
					e.preventDefault()
					const formData = new FormData(e.currentTarget)

					const newRecette = {
						name: String(formData.get('name')),
						calories: Number(formData.get('calories')),
						ingredients: formData.get('ingredients'),
						recette: String(formData.get('recette')),
					}

					postRecette.mutate(newRecette)

					return navigate('/')
				}}>

				<AddUpdateRecette />

				<button data-modal-hide="defaultModal" type="submit" className="btn">Enregister</button>
			</form>

		</div>
	);

}

export { AddRecette };
import {useQuery} from "react-query";
import {getIngredients} from "../../api/Ingredients/Ingredients";
import {Ingredient} from "../../api/Ingredients/Ingredients.type";
import {toast} from "react-toastify";


const useIngredients = () => {
	return useQuery<Ingredient[],Error>(
		["ingredients"],
		getIngredients,
		{
			retry: 1,
			retryDelay: 5000,
			onError: (error) => {
				console.error(error)
				toast.error("Erreur [1]");
			}
		}
	)
}

export {useIngredients};
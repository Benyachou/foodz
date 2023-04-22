import {useMutation, useQuery, useQueryClient} from "react-query";
import {getRecettes, postRecette} from "../../api/Recettes/Recettes";
import {Recette} from "../../api/Recettes/Recettes.type";
import {toast} from "react-toastify";

const useRecettes = () => {

	const queryClient = useQueryClient()

	const fetchGetRecette = () =>
		useQuery<Recette[],Error>(
			["recettes"],
			getRecettes,
			{
				retry: 1,
				retryDelay: 5000,
				onError: (error) => {
					console.error(error)
					toast.error("Erreur [12]");
				}
			}
		)


	const fetchPostRecette = () => {
		type RecettePost = {
			name: string,
			calories: number,
			ingredients: FormDataEntryValue | null

		}
		return useMutation<Recette[],Error,RecettePost>(
			(valueNewRecette:any) => postRecette(valueNewRecette),
			{
				retry: 1,
				retryDelay: 5000,
				onError: (error) => {
					console.error(error)
					toast.error("Erreur [22]");
				},
				onSuccess: () => queryClient.invalidateQueries(['recettes']),
			}
		)
	}



	return {
		fetchGetRecette,
		fetchPostRecette
	}
}

export {useRecettes};
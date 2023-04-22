import {useMutation, useQuery, useQueryClient} from "react-query";
import {getRecettes, postRecette} from "../../api/Recettes/Recettes";
import {Recette} from "../../api/Recettes/Recettes.type";
import {toast} from "react-toastify";

type SearchParams = {
	ingredients?: number[]
	name?: string
	calories?: number
}

const useRecettes = () => {

	const queryClient = useQueryClient()

	const fetchGetRecette = (params:SearchParams={}) =>
		useQuery<Recette[],Error>(
			["recettes",params],
			() => getRecettes(params),
			{
				retry: 1,
				retryDelay: 5000,
				onError: (error) => {
					console.error(error)
					toast.error("Erreur [12]");
				},
				/*enabled:Object.keys(params).length !== 0*/
				/*onSuccess: () => queryClient.invalidateQueries(['recettes'])*/
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
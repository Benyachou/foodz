import {useSessionStorage} from "../../hooks";

const URL_API = import.meta.env.VITE_URL_API ?? ''
const {value} = useSessionStorage()

export const getIngredients = async () =>
	fetch(URL_API+"/api/ingredients",{
		method: 'GET',
		headers: {
			'authorization': `Bearer ${value('token')}`,
		}
	})
		.then((res) => res.json())
		.then((res) => res.data)
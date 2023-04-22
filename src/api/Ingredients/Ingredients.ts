const URL_API = import.meta.env.VITE_URL_API ?? ''

export const getIngredients = async () =>
	fetch(URL_API+"/api/ingredients")
		.then((res) => res.json())
		.then((res) => res.data)
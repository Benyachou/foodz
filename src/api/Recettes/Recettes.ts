const URL_API = import.meta.env.VITE_URL_API ?? ''

export const getRecettes = async () =>
	fetch(URL_API+"/api/recettes")
		.then((res) => res.json())
		.then((res) => res.data)

export const postRecette = async (valueNewRecette:object) =>
	fetch(URL_API+"/api/add-recettes",{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(valueNewRecette)
	})
		.then((res) => res.json())
		.then((res) => res.data)





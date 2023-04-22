const URL_API = import.meta.env.VITE_URL_API ?? ''

export const getRecettes = async (params:object) => {
	let paramsString = ""
	if(Object.keys(params).length !== 0){
		paramsString = "?"
		for (const [key, value] of Object.entries(params)) {
			paramsString += `${key}=${value}&`
		}
		paramsString = paramsString.slice(0, -1)
	}
	return fetch(URL_API+"/api/recettes"+paramsString)
		.then((res) => res.json())
		.then((res) => res.data)
}


export const postRecette = async (valueNewRecette:object) =>
	fetch(URL_API+"/api/add-recettes",{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(valueNewRecette)
	})
		.then((res) => res.json())
		.then((res) => res.data)





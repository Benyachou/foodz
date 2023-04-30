const URL_API = import.meta.env.VITE_URL_API ?? ''

export const postLogin = async (valueUser:object) =>
	fetch(URL_API+"/api/login",{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(valueUser)
	})
		.then(async (res:Response) => {
			return {
				status: res.status,
				resp: await res.json()
			}
		})
		.then((res) => res)

export const postSignup = async (valueUser:object) =>
	fetch(URL_API+"/api/signup",{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(valueUser)
	})
		.then((res) => res.json())
		.then((res) => res.data)
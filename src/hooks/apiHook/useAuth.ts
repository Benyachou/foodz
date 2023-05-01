import {useMutation} from "react-query";
import {toast} from "react-toastify";
import {postLogin} from "../../api/Users/Auth";
import {useNavigate} from "react-router-dom";
import {useSessionStorage} from "../useSessionStorage";

const useAuth = () => {

	const fetchPostLogin = () => {

		type LoginPost = {
			email: string,
			password: string,
		}

		const navigate = useNavigate();
		const {setValue:setToken} = useSessionStorage()

		return useMutation<any,Error,LoginPost>(
			(valueLogin:LoginPost) => postLogin(valueLogin),
			{
				retry: 1,
				retryDelay: 5000,
				onError: (error: Error) => {
					console.error(error)
					toast.error("Erreur [31]");
				},
				onSuccess: (data) => {
					if (data.status === 200) {
						setToken('token',data.resp.token)
						toast.success("Vous êtes connecté")
						navigate('/')
					} else {
						toast.error("Erreur login");
					}
				},
			}
		)
	}


	return {
		fetchPostLogin
	}
}

export {useAuth};
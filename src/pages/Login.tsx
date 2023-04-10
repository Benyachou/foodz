import {LoginAuth} from "../partials/forms";
import {usePost} from "../hooks";

type Props = {

}

const Login = ({}: Props) => {

	const URL_API = import.meta.env.VITE_URL_API ?? ''

	const [result, loadPostLogin, runPostLogin] = usePost({
		path:URL_API+"/api/login",
		start:false,
	})

	const handleLogin = (e:any) => {
		e.preventDefault()
		const form = e.target
		const elements = form.elements
		const loginData = {
			email: elements.email.value,
			password: elements.password.value,
		}
		runPostLogin(loginData)
		form.reset()
	}

	// login page here
	return (<div className={""}>
        <h1 className={'my-10 text-white'}>Login</h1>
		<form className={"form flex flex-col"} onSubmit={(e) => handleLogin(e)}>
			<LoginAuth />
			<button type={"submit"} className={'btn my-4'}>Login</button>
		</form>
	</div>)
}

export {Login}
import {LoginAuth} from "../partials/forms";
import {useAuth} from "../hooks/apiHook/useAuth";
import {Loading} from "../components";

type Props = {

}

const Login = ({}: Props) => {

	const {fetchPostLogin} = useAuth()
	const {isLoading,mutate:postLogin} = fetchPostLogin()

	const handleLogin = (e:any) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const loginDataUser = {
			email: String(formData.get('email')),
			password: String(formData.get('password')),
		}
		postLogin(loginDataUser)

	}

	// login page here
	return (<div className={""}>
        <h1 className={'my-10 text-white'}>Login</h1>
		<form className={"form flex flex-col relative"} onSubmit={(e) => handleLogin(e)}>
			{isLoading && (
				<div className={'z-50 absolute w-full h-full flex justify-center items-center'}>
					<Loading />
				</div>
			)}
			<LoginAuth />
			<button type={"submit"} className={'btn my-4'}>Login</button>
		</form>
	</div>)
}

export {Login}
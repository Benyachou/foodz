type Props = {

}

const Login = ({}: Props) => {

	const handleLogin = (e:any) => {
		e.preventDefault()
		const form = e.target
		const elements = form.elements
		const loginData = {
			name: elements.email.value,
			password: elements.password.value,
		}
	}

	// login page here
	return (<div className={""}>
        <h1>Login</h1>
		<form className={"form flex flex-col"} onSubmit={(e) => handleLogin(e)}>
			<label htmlFor={"email"}>Email</label>
			<input type={"email"} id={"email"} name={"email"} />
			<label htmlFor={"password"}>Password</label>
			<input type={"password"} id={"password"} name={"password"} />
			<button type={"submit"} className={'btn my-4'}>Login</button>
		</form>
	</div>)
}

export {Login}
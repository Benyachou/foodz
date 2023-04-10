import {Input} from "../../components/imput";

const LoginAuth = () => {

	return (
		<>
			<Input
				type={'email'}
				name={'email'}
				label={'Email'}
				placeholder={'Email'} />

			<Input
				type={'password'}
				name={'password'}
				label={'Mot de passe'}
				placeholder={'Mot de passe'} />
		</>
	)
}

export {LoginAuth}
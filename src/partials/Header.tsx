import {ButtonDarkMod} from "../components/ButtonDarkMod";
import {Logo} from "../components/Logo";
import {useSessionStorage} from "../hooks";
import {Link, useNavigate} from "react-router-dom";
import {Icon, TimeClockNow} from "../components";

type Props = {
}

const Header = ({}: Props) => {

	const {removeValue:removeToken} = useSessionStorage()
	const navigate = useNavigate();

	return (
		<header
			className="text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
				<div className={'w-1/3'}>
					<a href="/" className="flex items-center">
						<Logo />
					</a>
				</div>

				<div className="flex items-center space-x-4">
					<Link to={'/add-recette'} className={"hover:underline"}>
						Ajouter
					</Link>
				</div>

				<div className={"w-1/3 flex justify-end items-center"}>
					<TimeClockNow />
					<button
						className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
						onClick={() => {
							removeToken('token')
							navigate('/login')
						}}>
						<Icon name={'exit'} />
					</button>
					<ButtonDarkMod />
				</div>
			</div>
		</header>
	)
}

export {Header}
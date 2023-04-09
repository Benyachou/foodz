import {ButtonDarkMod} from "../components/ButtonDarkMod";
import {Logo} from "../components/Logo";
import {Search} from "../components/imput";

type Props = {
}

const Header = ({}: Props) => {

	return (
		<header
			className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className={'w-1/3'}>
					<a href="/" className="flex items-center">
						<Logo />
					</a>
				</div>
				<div className={'w-1/3 flex justify-center'}>
					<Search className={'mx-2'} />
				</div>
				<div className={"w-1/3 flex justify-end"}>
					<ButtonDarkMod />
				</div>
			</div>
		</header>
	)
}

export {Header}
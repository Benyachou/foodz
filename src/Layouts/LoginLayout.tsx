import {ReactNode} from "react";

type Props = {
	children: ReactNode
}

const LoginLayout = ({children}:Props) => {
	return (
		<div className={"flex flex-col justify-center items-center h-screen"}>
			{children}
		</div>
	)
}

export {LoginLayout}
import {Header} from "../partials/Header";
import {Drawer} from "../partials/Drawer";
import React from "react";

type Props = {
	children: React.ReactNode
}

const AppLayout = ({children}:Props) => {

	return <div className={'w-full'}>
		<Header/>
		<Drawer/>
		<main className={'flex justify-center'}>
			{children}
		</main>
	</div>
}

export {AppLayout}
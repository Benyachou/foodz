import {Login, Recettes,Ingredients} from "./pages";
import {AppLayout, LoginLayout} from "./Layouts";
/*import {RoutesMap} from "./types/Route";*/

const Routes = [
	{
		path: '/login',
		element: Login,
		layout: LoginLayout,
		auth: false
	},
	{
		path: '/',
		element: Recettes,
		layout: AppLayout,
		auth: true
	},
	{
		path: '/ingredients',
		element: Ingredients,
		layout: AppLayout,
		auth: true
	}
]

export {Routes}
import {ReactNode} from "react";

export type RouteElement = {
	path: string,
	component: ReactNode,
	layout:  ReactNode,
	auth: boolean
}

export type RoutesMap = RouteElement[]
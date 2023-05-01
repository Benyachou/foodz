import {Navigate} from 'react-router-dom';
import {useSessionStorage} from "../hooks";

type AuthProps = {
	children: JSX.Element | JSX.Element[]
	enabled: boolean
}

const AuthMiddleware = ({ children,enabled }:AuthProps) => {

	const {value} = useSessionStorage('token')
	const token = value()
	if (!token && enabled) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};


export {AuthMiddleware}
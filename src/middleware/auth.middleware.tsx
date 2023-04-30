import {Navigate} from 'react-router-dom';
import {useToken} from "../hooks";

type AuthProps = {
	children: JSX.Element | JSX.Element[]
}

const AuthMiddleware = ({ children }:AuthProps) => {

	/*const { token } = useToken();

	if (!token) {
		return <Navigate to="/login" replace />;
	}*/

	return <>{children}</>;
};


export {AuthMiddleware}
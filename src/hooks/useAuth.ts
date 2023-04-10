import authContext from "../contexts/auth.context";
import { useContext } from "react";
const useAuth = () => {

	return useContext(authContext);
};

export {useAuth};
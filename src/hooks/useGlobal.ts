import { useContext } from "react";
import Global from "../contexts/global.context";
export function useGlobal(){
	return useContext(Global);
}
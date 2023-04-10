import { useContext } from "react";
import RecettesGlobal from "../contexts/recettes.context";
export function useRecetteGlobal(){
	return useContext(RecettesGlobal);
}
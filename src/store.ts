import { atom } from "jotai";
import {Ingredient} from "./api/Ingredients/Ingredients.type";

export const global = atom<{
	theme: "dark" | "light";
	ingredients: Ingredient[];
}>({
	theme: "dark",
	ingredients: [],
});
import { atom } from "jotai";
import {Ingredient} from "./api/Ingredients/Ingredients.type";

export const global = atom<{
	theme: "dark" | "light";
	ingredients: Ingredient[];
	openDrawer: boolean;
}>({
	theme: "dark",
	ingredients: [],
	openDrawer: false,
});
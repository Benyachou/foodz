import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils";
import {atomsWithQuery} from "jotai-tanstack-query";
import {getIngredients} from "./api/Ingredients/Ingredients";

export const global = atom<{
	openDrawer: boolean;
}>({
	openDrawer: false,
});

export const theme = atomWithStorage<"dark" | "light">('darkMode', "dark");
export const auth = atomWithStorage('auth', false);

/*
export const [ingredientAtom] = atomsWithQuery((get) => ({
	queryKey: ['type'],
	queryFn: async () => getIngredients(),
}))*/

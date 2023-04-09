import {Input, MultipleSelect, Search, SimpleSelect} from "../components/imput";
import RecettesGlobal from "../contexts/recettes.context";
import {useContext} from "react";

type Props = {

}

const SearchBar = ({}: Props) => {

	const global = useContext(RecettesGlobal);

	return (<div className={'flex items-center my-4'}>

		<MultipleSelect
			options={global.ingredients?.data.map((ingredient:any) => ({value: ingredient.id, label: ingredient.name}))}
			className={'mx-2'}
			placeholder={'Ingrédients'} />

	</div>)
}

export {SearchBar}
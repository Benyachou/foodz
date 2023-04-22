import {MultipleSelect} from "../components/imput";
import {useAtom} from "jotai";
import {global} from "../store";

type Props = {

}

const SearchBar = ({}: Props) => {

	const [Global] = useAtom(global)

	return (<div className={'flex items-center my-4'}>

		<MultipleSelect
			options={Global.ingredients.map((ingredient:any) => ({value: ingredient.id, label: ingredient.name}))}
			className={'mx-2'}
			placeholder={'Ingrédients'} />

	</div>)
}

export {SearchBar}
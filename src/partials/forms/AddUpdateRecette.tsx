import {Input, MultipleSelect, SimpleSelect} from "../../components/imput";
import {useAtom} from "jotai";
import {global} from "../../store";

const AddUpdateRecette = () => {

	const [Global] = useAtom(global)

	return (
		<>
			<Input
				name={'name'}
				label={'Nom'}
				placeholder={'Nom'} />

			<SimpleSelect
				name={'calories'}
				label={'Calories'}
				placeholder={'Calories'}
				options={[{
					value: 1,
					label: 1
				},{
					value: 2,
					label: 2
				},{
					value: 3,
					label: 3
				}]}
			/>

			<MultipleSelect
				name={'ingredients'}
				label={'Ingrédients'}
				placeholder={'Ingrédients'}
				options={Global.ingredients.map((ingredient:any) => ({value: ingredient.id, label: ingredient.name}))}
			/>
		</>
	)
}

export {AddUpdateRecette}
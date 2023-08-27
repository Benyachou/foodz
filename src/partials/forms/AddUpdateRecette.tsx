import {FilesDrop, Input, MultipleSelect, SimpleSelect, Wysiwyg} from "../../components/imput";
import {useIngredients} from "../../hooks/apiHook";

const AddUpdateRecette = () => {

	const {data} = useIngredients()
	const ingredients = data || []

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

			<FilesDrop
				name={'image'}
				label={'Image'}
			/>

			<MultipleSelect
				name={'ingredients'}
				label={'Ingrédients'}
				placeholder={'Ingrédients'}
				options={ingredients.map((ingredient:any) => ({value: ingredient.id, label: ingredient.name}))}
			/>

			<Wysiwyg
				name={'recette'}
				label={'Recette'}
				placeholder={'Recette'}
			/>


		</>
	)
}

export {AddUpdateRecette}
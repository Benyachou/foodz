import {MultipleSelect, Search, SimpleSelect} from "../components/imput";
import {useIngredients} from "../hooks/apiHook";

type Props = {
	search: any,
	setSearch: any
}

const SearchBar = ({search,setSearch}: Props) => {

	const {data} = useIngredients()
	const ingredients = data || []

	return (<div className={'flex items-center my-4'}>

		<div className={'w-1/3'}>
			<Search
				onChange={(value) => setSearch({...search, name: value})}
				placeholder={'Rechercher par nom'}
				className={'mr-2'} />
		</div>

		<div className={'w-1/3'}>
			<MultipleSelect
				onChange={(value) => setSearch({...search, ingredients: value})}
				options={ingredients.map((ingredient:any) => ({value: ingredient.id, label: ingredient.name}))}
				className={'mr-2'}
				placeholder={'Ingrédients'} />
		</div>

		<div className={'w-1/3'}>
			<SimpleSelect
				onChange={(value) => setSearch({...search, calories: value.value})}
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
		</div>

	</div>)
}

export {SearchBar}
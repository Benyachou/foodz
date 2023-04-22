import Select from 'react-select'
import {useState} from "react";

type Props = {
	className?:string
	label?:string
	placeholder?:string
	options?:{ value: string|number, label: string|number }[]
	name?:string
}
const MultipleSelect = ({className='',label,placeholder='',options,name}: Props) => {

	const [selectedOptions, setSelectedOptions] = useState();
	const [value, setValue] = useState<any>([]);

	const handleSelect = (data:any) => {
		const cacheValue:string[] = []
		data.map((option:{value:string}) => {
			cacheValue.push(option.value.toString())
		})
		setSelectedOptions(data);
		setValue(cacheValue)
	}

	return (<div className={className}>
		{label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
		<input type={"hidden"} name={name} value={value}/>
		<Select
			loadingMessage={() => 'Chargement...'}
			value={selectedOptions}
			isSearchable={true}
			closeMenuOnSelect={false}
			onChange={handleSelect}
			placeholder={placeholder}
			unstyled={true}
			classNamePrefix={'text-gray-900 dark:text-white text-sm'}
			className={'px-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
			isMulti={true}
			options={options}
		/>
	</div>)
}

export {MultipleSelect}
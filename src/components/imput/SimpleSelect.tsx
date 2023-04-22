import Select from "react-select";

type Props = {
	onChange?: (e: any) => void
	className?:string
	label?:string
	placeholder?:string
	options?:{ value: string|number, label: string|number }[]
	name?:string
}

const SimpleSelect = ({className = '',label,placeholder='',options,name,onChange}:Props) => {

	return (<div className={className}>

		{label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}

		<Select
			onChange={(e) => onChange && onChange(e)}
			name={name}
			placeholder={placeholder}
			isSearchable={false}
			unstyled={true}
			classNamePrefix={'text-gray-900 dark:text-white text-sm'}
			className={'px-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
			options={options} />
	</div>)
}

export {SimpleSelect}
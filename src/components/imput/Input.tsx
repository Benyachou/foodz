type Props = {
	name?: string
	className?: string
	label?: string
	placeholder?:string
	type?: 'email'|'password'|'text'
}

const Input = ({className="",label,placeholder="",name,type='text'}: Props) => {

	return (<div className={className}>
		<div className="mb-6">

			{label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}

			<input type={type}
				   name={name}
				   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				   placeholder={placeholder} />
		</div>
	</div>)
}

export {Input}
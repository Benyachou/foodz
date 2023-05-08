const useSessionStorage = () => {

	const value = (keyName:string) => {
		if (keyName)
			try {
				const value = window.sessionStorage.getItem(keyName);

				if (value) {
					return JSON.parse(value);
				}
			} catch (err) {
				return keyName;
			}
	}
	/*const [value] = useState(getValue());*/

	const setValue = (keyName:string,newValue:any) => {
		try {
			window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (err) {}
		return newValue;
	};

	const removeValue = (keyName:string) => {
		try {
			window.sessionStorage.removeItem(keyName);
		} catch (err) {}
	}

	return {
		value,
		setValue,
		removeValue
	};

}


export {useSessionStorage};
import { useCallback, useEffect, useState } from "react";

/*export async function extendSanctumHeader(method:string|undefined):Promise<object> {

	let requestHeaders = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}

	if (method && (
		method === "POST"||
		method === "DELETE"||
		method === "PUT")){

		// csrf
		await fetch(`/sanctum/csrf-cookie`,{
			method: 'GET',
			mode: 'cors',
			credentials: "include",
		})

		requestHeaders = {
			...requestHeaders,
			...{
				/!*'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'].toString()*!/
			}
		}
	}

	return requestHeaders
}*/

interface BaseProps{
	path:string,
	start:boolean
}

type GetProps = {
	method?:"GET"|"HEAD",
	data?:never
}

type PostProps = {
	method?:"POST"|"DELETE"|"PUT",
	data?:object
}

type ConditionalProps = GetProps | PostProps;

type Props = BaseProps & ConditionalProps;

type FetchReturn = [
	data:any|undefined,
	loading:boolean,
	run:(dataAdd?:object|null,callback?:{ () : void } | null)=>void,
	statusCode:number
]

export function useFetch({path, method, data, start}:Props):FetchReturn
{
	const [result,setResult] = useState<object>()
	const [loading,setLoading] = useState(false);
	const [statusCode, setCode] = useState(-1);

	const fetchData = useCallback(async (
		dataAdd:object|null=null,
		callback:{ () : void }|null=null,
		isRun=false) => {

		if (!isRun){
			if(loading){return;}
		}

		setLoading(true);

		const response = await fetch(path, {
			mode:'cors',
			method:method,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				/*...(data === undefined ? {} : { 'Content-Type': 'application/x-www-form-urlencoded'}),*/
			},
			/*...method != 'GET' && {body:JSON.stringify({...(data === undefined ? {} : data),...dataAdd})}*/
			...method != 'GET' && {body: new URLSearchParams({...(data === undefined ? {} : data),...dataAdd})}
		});
		setCode(response.status);
		try {
			const data = await response.json();
			setResult(data);
			callback && callback();
		} catch (err) {
			setResult({});
		}
		setLoading(false);

	},[data, statusCode]);

	useEffect(()=>{
		if(start){fetchData().catch(error => console.log(error));}
	},[fetchData, start]);

	const run = (dataAdd:object|null=null,callback:{() : void } | null=null) => {
		fetchData(dataAdd,callback,true).catch(error => console.log(error));
	}

	return ([result, loading, run, statusCode]);
}

export function useGet({path, start}:BaseProps):FetchReturn
{
	return useFetch({path, method:"GET", start});
}

export function usePost({path, start, data}:BaseProps & PostProps):FetchReturn
{
	const fetchResult = useFetch({path, method:"POST", start, data});
	return (fetchResult);
}
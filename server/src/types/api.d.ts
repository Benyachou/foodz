declare type Api = {
	controller: (req: e.Request, res: e.Response) => any|{status:number, jsonRep: Object};
	method: "get"|"post"
	route: string;
	auth?: boolean;
}[]

export {Api}
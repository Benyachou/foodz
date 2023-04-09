declare type Api = {
	handler: (req: e.Request, res: e.Response) => void;
	method: "get"|"post"
	route: string;
}[]

export {Api}
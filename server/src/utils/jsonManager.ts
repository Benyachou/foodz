import fs from "fs";

class jsonFManager {

	protected static pathData:string =  "../data/"

	public static async jsonGetOne(jsonFile:string,equal:any[]) {
		const json = JSON.parse(fs.readFileSync(jsonFManager.pathData + jsonFile + ".json").toString());
		return json.data.find((item:any) => item[equal[0]] === equal[1]);
	}

	public static async jsonUpdate(jsonFile:string,id:number,data: object) {

	}

	public static async jsonDeleteOne(jsonFile:string,id:number) {
		const json = JSON.parse(fs.readFileSync(jsonFManager.pathData + jsonFile + ".json").toString());
		const index = await json.data.findIndex((item:any) => item.id === id);
		json.data.splice(index, 1);
		fs.writeFileSync(jsonFManager.pathData + jsonFile + ".json", JSON.stringify(json, null, 2));
		return json;
	}

	public static async jsonCheckAuth(username:string,password:string) {

	}

	public static async jsonGetAll(jsonFile:string) {
		return JSON.parse(fs.readFileSync(jsonFManager.pathData + jsonFile + ".json").toString())
	}

	public static async jsonCreate(jsonFile:string,data: object) {
		const json = JSON.parse(fs.readFileSync(jsonFManager.pathData + jsonFile + ".json").toString());

		let id = 1;
		if(json.data.length > 0){
			id = json.data[json.data.length - 1].id + 1
		}

		json.data.push({
			id,
			created_at: new Date().toISOString(),
			...data
		});
		fs.writeFileSync(jsonFManager.pathData + jsonFile + ".json", JSON.stringify(json, null, 2));
		return json;
	}

	public static async jsonCheckIfExist(jsonFile:string,compareKey:string,data: string): Promise<boolean> {
		const json = await JSON.parse(fs.readFileSync(jsonFManager.pathData + jsonFile + ".json").toString());
		const isExist = await json.data.find((item:any) => item[compareKey] === data);
		return !!isExist;
	}
}

export {jsonFManager}
import fs from "fs";

export function getOne(jsonFile:string,id:number) {

}

export function update(jsonFile:string,id:number,data: object) {

}

export function deleteOne(jsonFile:string,id:number) {

}

export function checkAuth(username:string,password:string) {

}

export function getAll(jsonFile:string) {
	return JSON.parse(fs.readFileSync(jsonFile).toString())
}

export function create(filePath:string,data: object) {
	const json = JSON.parse(fs.readFileSync(filePath).toString());

	let id = 1;
	if(json.data.length > 0){
		id = json.data[json.data.length - 1].id + 1
	}

	json.data.push({
		id,
		created_at: new Date().toISOString(),
		...data
	});
	fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
	return json;
}
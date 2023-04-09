import fs from "fs";

function writeAddJsonFile(data: object,filePath:string) {
	const json = JSON.parse(fs.readFileSync(filePath).toString());

	/*let id = 1;*/
	/*if(json.data.length > 0){
		id = json.data[json.data.length - 1].id + 1
	}*/
	/*created_at: new Date().toISOString()*/

	json.data.push({
		id: 1,
		...data
	});
	fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
	return json;
}

export {writeAddJsonFile}
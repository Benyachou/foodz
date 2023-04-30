const bcrypt = require('bcrypt');
class testController {
	public static async get(req:any,res:any){
		const passwordHash = await bcrypt.hash("password", 10);
		return {
			message: passwordHash
		}
	}

	public static async getAll() {

	}

	public static async create() {

	}

	public static async edit() {

	}

	public static async destroy() {

	}
}

export {testController}
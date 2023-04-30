import {jsonFManager} from "../utils/jsonManager";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class auth extends jsonFManager {

	public static async login (req:any, res:any) {

		const { email, password } = req.body;
		const error = {
			status: 400,
			jsonRep: {error: "login" }
		}

		const user = await super.jsonGetOne('users',['email', email])
		if (!user) return error
		if (!user.active) return error

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)  return error
		const token = jwt.sign({ userId: user.id, userEmail: user.email }, process.env.JWT_SECRET);
		return {token}
	};

	public static async signup (req:any, res:any) {
		const { email, name, password } = req.body;
		// check with email exists
		const user = await super.jsonGetOne('users',['email', email])
		if (user) return {error: "signup" }
		const passwordHash = await bcrypt.hash(password, 10);
		await super.jsonCreate('users', {
			email,
			name,
			password:passwordHash
		})

		return {
			status: 201,
			jsonRep:{
				message: 'User added successfully'
			}
		}
	};

	public static async logout() {

	}
}

export {auth}
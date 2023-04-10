const HOST = "217.182.170.219"
const USER = "ubuntu"
const REPOSITORY = "jviatge/foodz"
const PATH = "/home/ubuntu/www/foodz"
const PACKAGE_MANAGER = "pnpm"
const REF = "origin/main"
const NAME_PROJECT_SNAKE = "foodz"

/*const gitURl = `https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/${PROJECT_GIT}`*/

/*https://@github.com/jviatge/foodz*/

const start = (type:string, env:string) => `cd ./server && pm2 startOrRestart ecosystem.config.js --env ${env} --only ${NAME_PROJECT_SNAKE}_${type} && cd ../`

module.exports = {

	apps : [{
		cwd: "../../",
		script: PACKAGE_MANAGER,
		args: "start",
		autorestart: true,
	}],

	// Deployment Configuration
	deploy : {
		production : {
			"user" : USER,
			"host" : [HOST],
			"ref"  : REF,
			"repo" : `https://@github.com/${REPOSITORY}`,
			"path" : PATH,

			"pre-deploy-local" : "",
			"pre-deploy" :  `${PACKAGE_MANAGER} install && 
				cd server && 
				${PACKAGE_MANAGER} install && 
				${PACKAGE_MANAGER} run build`,
			"post-deploy" :
				`${start("production", "production")} &&
				pm2 save`,
			"pre-setup" : "",
		}
	}
};


const HOST = "217.182.170.219"
const USER = "ubuntu"
const REPOSITORY = "jviatge/foodz"
const PATH = "/home/ubuntu/www/foodz"
const PACKAGE_MANAGER = "pnpm"

/*const gitURl = `https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/${PROJECT_GIT}`*/

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
			"ref"  : "origin/master",
			"repo" : `git@github.com:${REPOSITORY}.git`,
			"path" : PATH,

			"pre-deploy-local" : "",
			"post-deploy" : `${PACKAGE_MANAGER} install`,
			"pre-setup" : "",
		}
	}
};
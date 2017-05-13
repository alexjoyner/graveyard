import Generator from 'yeoman-generator';


class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
	}
	prompting() {
		return this.prompt([{
			type    :   'input',
			name    :   'appName',
			message :   'Your-project-name',
			default :   this.appname    //Default to current folder name
		}]).then((answers) => {
			this.log('app name', answers.appName);
		});
	}
}

module.exports = AppGenerator;

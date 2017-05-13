import Generator from 'yeoman-generator';
import path from 'path';

class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
		this.config.save();
		this.argument('appName', { type: String, required: false });
	}
	initializing(){
		this.appName = this.options.appName || this.appName;
		this._paths();
	}
	_paths() {
		this.sourceRoot(path.resolve(__dirname + '/../../templates'));
	}
	prompting(){
		return this.prompt([{
			type    : 'input',
			name    : 'rootUrl',
			message : 'What is the root url of your local server?',
			default : 'http://localhost:8000'
		},{
			type    : 'input',
			name    : 'cssPrefix',
			message : 'What would you like the css prefix?',
			default : 'ro'
		},{
			type    : 'input',
			name    : 'homeContainerName',
			message : 'What is the name of your home container? All lowercase',
			default : 'home'
		}]).then((answers) => {
			this.rootUrl = answers.rootUrl;
			this.cssPrefix = answers.cssPrefix;
			this.homeContainerName = answers.homeContainerName;
		});
	}
	writing() {
		let upperHomeContainerName = this._uppercase_first_letter(this.homeContainerName);
		this.fs.copyTpl(
			this.templatePath('main'),
			this.destinationPath(this.appName),
			{
				appName : this.options.appName,
				rootURL : this.rootUrl,
				cssPrefix: this.cssPrefix,
				homeContainerName: this.homeContainerName,
				upperHomeContainerName
			}
		)
	}
	_uppercase_first_letter(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = AppGenerator;

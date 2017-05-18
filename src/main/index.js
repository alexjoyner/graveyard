import Generator from 'yeoman-generator';
import path from 'path';

class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
	}
	initializing(){
		this._paths();
	}
	_paths() {
		this.sourceRoot(path.resolve(__dirname + '/../../templates'));
	}
	prompting(){
		return this.prompt([{
			type    : 'input',
			name    : 'name',
			message : 'Your project name?',
			default : this.appname // Default to current folder name
		},{
			type    : 'input',
			name    : 'rootUrl',
			message : 'root url of your local server?',
			default : 'http://localhost:8000'
		},{
			type    : 'input',
			name    : 'cssPrefix',
			message : 'css prefix',
			default : 'ro'
		},{
			type    : 'input',
			name    : 'homeContainerName',
			message : 'Home container name',
			default : 'Home' // Default to current folder name
		}]).then((answers) => {
			this.name = answers.name;
			this.rootUrl = answers.rootUrl;
			this.cssPrefix = answers.cssPrefix;
			this.config.set('homeContainerName', answers.homeContainerName);
			this.homeContainerName = answers.homeContainerName;
		});
	}
	writing() {
		let tplVars = {
			appName : this.name,
			rootURL : this.rootUrl,
			cssPrefix: this.cssPrefix,
			upperHomeContainerName : this._uppercase_first_letter(this.homeContainerName),
			homeContainerName : this.homeContainerName
		};
		this.log('tplVars: ', JSON.stringify(tplVars));
		this.fs.copyTpl(
			this.templatePath('main'),
			this.destinationPath(''),
			tplVars
		);
		// Copy all dotfiles
		this.fs.copy(
			this.templatePath('idea/scopes'),
			this.destinationPath('.idea/scopes')
		);
		// Copy all dotfiles
		this.fs.copy(
			this.templatePath('main/**/.*'),
			this.destinationRoot()
		);
	}
	install(){
		this.npmInstall();
	}
	end(){
		this.log('Thanks for choosing ro-react!');
		this.config.delete('MainAppCreation');
		this.config.delete('homeContainerName');
	}
	_uppercase_first_letter(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = AppGenerator;

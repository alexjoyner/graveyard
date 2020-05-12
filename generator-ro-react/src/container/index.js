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
	promting() {
		let promps = [];
		if(!this.config.get('MainAppCreation')){
			promps.push({
				type    : 'input',
				name    : 'containerName',
				message : 'What is the name of your container?',
				default : 'Home'
			})
		}
		return this.prompt(promps).then((answers) => {
			this.containerName = this.config.get('homeContainerName') || answers.containerName;
		});
	}
	writing() {
		let upperContainerName = this._uppercase_first_letter(this.containerName);
		this.fs.copyTpl(
			this.templatePath('container'),
			this.destinationPath('client/' + upperContainerName),
			{
				containerName : this.homeContainerName,
				upperContainerName : upperContainerName
			}
		);
		this.fs.copyTpl(
			this.templatePath('component'),
			this.destinationPath('client/' + upperContainerName + '/' + upperContainerName + 'UI'),
			{
				dirOffset: '',
				componentName : upperContainerName + 'UI'
			}
		)
	}
	_uppercase_first_letter(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = AppGenerator;

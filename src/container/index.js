import Generator from 'yeoman-generator';
import path from 'path';

class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
		this.argument('containerName', { type: String, required: true });
	}
	initializing(){
		this._paths();
	}
	_paths() {
		this.sourceRoot(path.resolve(__dirname + '/../../templates'));
	}
	writing() {
		let upperContainerName = this._uppercase_first_letter(this.options.containerName);
		this.fs.copyTpl(
			this.templatePath('container'),
			this.destinationPath('client/' + this.options.containerName),
			{
				containerName : this.options.containerName,
				upperContainerName : upperContainerName
			}
		)
	}
	_uppercase_first_letter(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = AppGenerator;

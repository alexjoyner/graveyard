import Generator from 'yeoman-generator';
import path from 'path';

class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
		this.argument('componentName', { type: String, required: true });
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
			name    : 'componentLocation',
			message : 'Where are we storing this component?',
			default : 'Utils'
		}]).then((answers) => {
			this.componentLocation = answers.componentLocation;
		});
	}
	writing() {
		let upperComponentLocation = this._uppercase_first_letter(this.componentLocation);
		let upperComponentName = this._uppercase_first_letter(this.options.componentName);
		this.fs.copyTpl(
			this.templatePath('component'),
			this.destinationPath('client/' + upperComponentLocation + '/' + upperComponentName),
			{
				componentName : upperComponentName
			}
		)
	}
	_uppercase_first_letter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = AppGenerator;

import Generator from 'yeoman-generator';

class AppGenerator extends Generator {
	initializing(){
		this.config.set('MainAppCreation', true);
		this.composeWith(require.resolve('../main'));
		this.composeWith(require.resolve('../container'));
	}
}

module.exports = AppGenerator;

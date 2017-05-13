import Generator from 'yeoman-generator';


class AppGenerator extends Generator {
	constructor(args, opts){
		super(args, opts);
	}
	method1() {
		this.log('method blah just ran');
	}
	method2() {
		this.log('method 2 just ran');
	}
}

module.exports = AppGenerator;

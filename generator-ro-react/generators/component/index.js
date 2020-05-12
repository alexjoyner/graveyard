'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppGenerator = function (_Generator) {
	_inherits(AppGenerator, _Generator);

	function AppGenerator(args, opts) {
		_classCallCheck(this, AppGenerator);

		var _this = _possibleConstructorReturn(this, (AppGenerator.__proto__ || Object.getPrototypeOf(AppGenerator)).call(this, args, opts));

		_this.argument('componentName', { type: String, required: true });
		return _this;
	}

	_createClass(AppGenerator, [{
		key: 'initializing',
		value: function initializing() {
			this._paths();
		}
	}, {
		key: '_paths',
		value: function _paths() {
			this.sourceRoot(_path2.default.resolve(__dirname + '/../../templates'));
		}
	}, {
		key: 'prompting',
		value: function prompting() {
			var _this2 = this;

			return this.prompt([{
				type: 'input',
				name: 'componentLocation',
				message: 'Where are we storing this component?',
				default: 'Utils'
			}]).then(function (answers) {
				_this2.componentLocation = answers.componentLocation;
			});
		}
	}, {
		key: 'writing',
		value: function writing() {
			var upperComponentLocation = this._uppercase_first_letter(this.componentLocation);
			var upperComponentName = this._uppercase_first_letter(this.options.componentName);
			var slashes = upperComponentLocation.split('').filter(function (char) {
				return char === '/';
			}).length;
			var dirOffset = '';
			for (var i = 0; i < slashes; i++) {
				dirOffset += '../';
			}
			this.fs.copyTpl(this.templatePath('component'), this.destinationPath('client/' + upperComponentLocation + '/' + upperComponentName), {
				dirOffset: dirOffset,
				componentName: upperComponentName
			});
		}
	}, {
		key: '_uppercase_first_letter',
		value: function _uppercase_first_letter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}]);

	return AppGenerator;
}(_yeomanGenerator2.default);

module.exports = AppGenerator;
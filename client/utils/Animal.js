"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(info) {
        this.speed = info.speed || 1;
        this.type = info.type || 'animal of unknown type';
    }
    Animal.prototype.run = function () {
        return 'Your ' + this.type + ' ran at a speed of ' + this.speed;
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map
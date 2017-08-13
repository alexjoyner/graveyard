"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phys_Object = (function () {
    function Phys_Object(physProps) {
        this.physProps = physProps;
    }
    Phys_Object.prototype.setX_pos = function (newX) {
        this.physProps.position.x = newX;
    };
    Phys_Object.prototype.setY_pos = function (newY) {
        this.physProps.position.y = newY;
    };
    return Phys_Object;
}());
exports.Phys_Object = Phys_Object;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var World = (function () {
    function World(info) {
        this.engine = info.p5;
        this.height = info.height;
        this.width = info.width;
    }
    World.prototype.display = function () {
        this.engine.createCanvas(this.height, this.width);
    };
    World.prototype.checkBoundaryColision = function (obj) {
        if (obj.x_pos() > this.width) {
            obj.setX_pos(this.width);
            obj.setX_vel(obj.x_vel() * -1);
        }
        else if (obj.x_pos() < 0) {
            obj.setX_vel(obj.x_vel() * -1);
            obj.setX_pos(0);
        }
        if (obj.y_pos() > this.height) {
            obj.setY_vel(obj.y_vel() * -1);
            obj.setY_pos(this.height);
        }
        else if (obj.y_pos() < 0) {
            obj.setY_vel(obj.y_vel() * -1);
            obj.setY_pos(0);
        }
    };
    return World;
}());
exports.World = World;

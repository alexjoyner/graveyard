"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p5 = require("p5");
var World = (function () {
    function World(info) {
        this.gravity = info.gravity;
        this.engine = info.p5;
        this.height = info.height;
        this.width = info.width;
    }
    World.prototype.display = function () {
        this.engine.createCanvas(this.height, this.width);
    };
    World.prototype.applyEnvironmentEffects = function (obj) {
        var gravityEffect = p5.Vector.mult(this.gravity, obj.get_mass());
        obj.applyForce(gravityEffect);
    };
    World.prototype.checkBoundaryColision = function (obj) {
        if (obj.getX_pos() > this.width) {
            obj.setX_pos(this.width);
            obj.setX_vel(obj.getX_vel() * -0.5);
        }
        else if (obj.getX_pos() < 0) {
            obj.setX_vel(obj.getX_vel() * -0.5);
            obj.setX_pos(0);
        }
        if (obj.getY_pos() > this.height) {
            obj.setY_vel(obj.getY_vel() * -0.5);
            obj.setY_pos(this.height);
        }
        else if (obj.getY_pos() < 0) {
            obj.setY_vel(obj.getY_vel() * -0.5);
            obj.setY_pos(0);
        }
    };
    return World;
}());
exports.World = World;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p5 = require("p5");
var Phys_Object = (function () {
    function Phys_Object(info) {
        this.mass = 10;
        this.p5 = info.p5;
        this.height = info.height;
        this.width = info.width;
        this.mass = info.mass;
        this.position = info.position || info.p5.createVector(0, 0);
        this.velocity = info.velocity || info.p5.createVector(0, 0);
        this.acceleration = info.acceleration || info.p5.createVector(0, 0);
    }
    Phys_Object.prototype.getX_pos = function () { return this.position.x; };
    ;
    Phys_Object.prototype.getY_pos = function () { return this.position.y; };
    ;
    Phys_Object.prototype.getX_vel = function () { return this.velocity.x; };
    ;
    Phys_Object.prototype.getY_vel = function () { return this.velocity.y; };
    ;
    Phys_Object.prototype.getX_accel = function () { return this.acceleration.x; };
    ;
    Phys_Object.prototype.getY_accel = function () { return this.acceleration.y; };
    ;
    Phys_Object.prototype.get_mass = function () { return this.mass; };
    ;
    Phys_Object.prototype.setX_pos = function (newX) {
        this.position.x = newX;
    };
    Phys_Object.prototype.setY_pos = function (newY) {
        this.position.y = newY;
    };
    Phys_Object.prototype.setX_vel = function (newX_vel) {
        this.velocity.x = newX_vel;
    };
    Phys_Object.prototype.setY_vel = function (newY_vel) {
        this.velocity.y = newY_vel;
    };
    Phys_Object.prototype.move = function () {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
        this.display();
    };
    Phys_Object.prototype.applyForce = function (forceV) {
        var addedAcceleration = p5.Vector.div(forceV, this.mass);
        this.acceleration.add(addedAcceleration);
    };
    return Phys_Object;
}());
exports.Phys_Object = Phys_Object;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var Ball_1 = require("../utils/Object/Ball/Ball");
var World_1 = require("../utils/World");
var main = function (p5) {
    var theWorld = new World_1.World({
        p5: p5,
        height: 400,
        width: 400,
        position: p5.createVector(0, 0)
    });
    var bg_color = 255;
    var myBall;
    var gravity = p5.createVector(0, 0.09);
    var wind = p5.createVector(1, 0);
    p5.setup = function () {
        theWorld.display();
        myBall = new Ball_1.Ball({
            p5: p5,
            height: 10,
            width: 10,
            mass: 1,
            position: p5.createVector(150, 200)
        });
    };
    p5.draw = function () {
        p5.background(bg_color);
        myBall.applyForce(gravity.mult(myBall.mass));
        myBall.move(p5);
        theWorld.checkBoundaryColision(myBall);
    };
    p5.mousePressed = function () {
        myBall.applyForce(wind);
    };
};
new P5(main);

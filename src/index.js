"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var Ball_1 = require("../utils/Object/Ball/Ball");
var main = function (p5) {
    var bg_color = 255;
    var myBall;
    p5.setup = function () {
        p5.createCanvas(400, 400);
        myBall = new Ball_1.Ball({
            height: 100,
            width: 100,
            position: p5.createVector(200, 400),
            velocity: p5.createVector(0, -0.1),
            acceleration: p5.createVector(0, -0.001)
        });
    };
    p5.draw = function () {
        p5.background(bg_color);
        myBall.draw(p5);
        myBall.update(p5);
    };
};
new P5(main);

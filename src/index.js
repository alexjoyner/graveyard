"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var Ball_1 = require("../utils/Ball");
var main = function (p5) {
    var gray = 200;
    var myBall;
    p5.setup = function () {
        p5.createCanvas(400, 400);
        myBall = new Ball_1.Ball({
            height: 100,
            width: 100,
            position: p5.createVector(100, 100)
        });
    };
    p5.draw = function () {
        p5.background(gray);
        myBall.draw(p5);
    };
    p5.mousePressed = function () {
        gray = (gray + 16) % 256;
    };
};
new P5(main);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var Circle_1 = require("../utils/shapes/Circle");
var main = function (p5) {
    var gray = 150;
    p5.setup = function () {
        p5.createCanvas(400, 400);
    };
    p5.draw = function () {
        p5.background(gray);
        new Circle_1.Circle.draw(p5);
    };
    p5.mousePressed = function () {
        gray = (gray + 16) % 256;
    };
};
new P5(main);

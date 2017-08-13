"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var main = function (p) {
    var gray = 0;
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.background(gray);
        p.rect(p.width / 2 - 25, p.height / 2 - 25, 50, 50);
    };
    p.mousePressed = function () {
        gray = (gray + 16) % 256;
    };
};
new P5(main);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P5 = require("p5");
var Ball_1 = require("../utils/p5/Object/Ball/Ball");
var World_1 = require("../utils/p5/World");
var main = function (p5) {
    var bg_color = 255;
    var myBalls = [];
    var theWorld = new World_1.World({
        p5: p5,
        height: 400,
        width: 400,
        gravity: p5.createVector(0, 0.09)
    });
    p5.setup = function () {
        console.log('Testing now!');
        theWorld.display();
        for (var i = 0; i < 1; i++) {
            myBalls.push(new Ball_1.Ball({
                p5: p5,
                height: null,
                width: null,
                mass: p5.random(5),
                position: p5.createVector(p5.random(400), 100)
            }));
        }
        console.log(myBalls);
    };
    p5.draw = function () {
        p5.background(bg_color);
        for (var i = 0; i < myBalls.length; i++) {
            theWorld.applyEnvironmentEffects(myBalls[i]);
            theWorld.checkBoundaryColision(myBalls[i]);
            myBalls[i].move();
        }
    };
    p5.mouseDragged = function () {
        for (var i = 0; i < myBalls.length; i++) {
            myBalls[i].setX_pos(p5.mouseX);
            myBalls[i].setY_pos(p5.mouseY);
        }
    };
};
new P5(main);

import * as P5 from 'p5';
import {Ball} from "../utils/Object/Ball/Ball";
import {World} from "../utils/World";
const main = (p5) => {
	let theWorld = new World({
        p5: p5,
        height: 400,
        width: 400,
        position: p5.createVector(0, 0)
    });
	let bg_color = 255;
	let myBall;
	let gravity = p5.createVector(0, 0.09);
	let wind = p5.createVector(1, 0);

	p5.setup = function () {
		theWorld.display();
		myBall = new Ball({
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

	p5.mousePressed = function(){
		myBall.applyForce(wind)
	}
};

new P5(main);




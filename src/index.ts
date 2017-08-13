import * as P5 from 'p5';
import {Ball} from "../utils/Object/Ball/Ball";
const main = (p5) => {
	let bg_color = 255;
	let myBall;
	p5.setup = function () {
		p5.createCanvas(400, 400);
		myBall = new Ball({
			height: 100,
			width: 100,
			position: p5.createVector(200, 400),
			velocity: p5.createVector(0, -0.1),
			acceleration: p5.createVector(0, -0.001)
		})
	};

	p5.draw = function () {
		p5.background(bg_color);
		myBall.draw(p5);
        myBall.update(p5);
	};
};

new P5(main);




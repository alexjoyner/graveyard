import * as P5 from 'p5';
import {Ball} from "../utils/Ball";
const main = (p5) => {
	let gray = 200;
	let myBall;
	p5.setup = function () {
		p5.createCanvas(400, 400);
		myBall = new Ball({
			height: 100,
			width: 100,
			position: p5.createVector(100, 100)
		})
	};

	p5.draw = function () {
		p5.background(gray);
		myBall.draw(p5);
	};

	p5.mousePressed = function () {
		gray = (gray + 16) % 256
	}
};

new P5(main);




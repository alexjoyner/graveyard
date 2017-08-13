import * as P5 from 'p5';
import {Ball} from "../utils/Object/Ball/Ball";
const main = (p5) => {
	let bg_color = 255;
	let myBall;
	p5.setup = function () {
		p5.createCanvas(400, 400);
		myBall = new Ball({
			height: 10,
			width: 10,
			position: p5.createVector(200, 200),
			velocity: p5.createVector(0, 0),
			acceleration: p5.createVector(0, 0)
		})
	};

	p5.draw = function () {
		p5.background(bg_color);
		myBall.display(p5);
		myBall.move(p5);
	};

	p5.mouseDragged = function(){
		myBall.setX_pos(p5.mouseX);
		myBall.setY_pos(p5.mouseY);
	}
};

new P5(main);




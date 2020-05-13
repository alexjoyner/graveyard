import * as P5 from 'p5';
const main = (p5) => {
	let gray = 150;

	p5.setup = function () {
		p5.createCanvas(400, 400)
	};

	p5.draw = function () {
		p5.background(gray);
	};

	p5.mousePressed = function () {
		gray = (gray + 16) % 256
	}
};

new P5(main);




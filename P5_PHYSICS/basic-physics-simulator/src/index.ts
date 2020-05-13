import * as P5 from 'p5';
import {Ball} from "../utils/p5/Object/Ball/Ball";
import {World} from "../utils/p5/World";
const main = (p5) => {
    let bg_color = 255;
    let myBalls = [];
	let theWorld = new World({
        p5: p5,
        height: 400,
        width: 400,
        gravity: p5.createVector(0, 0.09)
    });

	p5.setup = function () {
		console.log('Testing now!');
		theWorld.display();
		for(let i = 0; i < 1; i++){
			myBalls.push(new Ball({
				p5: p5,
				height: null,
				width: null,
				mass: p5.random(5),
				position: p5.createVector(p5.random(400), 100)
			}))
		}
		console.log(myBalls);
	};

	p5.draw = function () {
        p5.background(bg_color);
		for(let i = 0; i < myBalls.length; i++){
            theWorld.applyEnvironmentEffects(myBalls[i]);
            theWorld.checkBoundaryColision(myBalls[i]);
            myBalls[i].move();
		}
	};

	p5.mouseDragged = function(){
        for(let i = 0; i < myBalls.length; i++){
            myBalls[i].setX_pos(p5.mouseX);
            myBalls[i].setY_pos(p5.mouseY);
        }
	}
};

new P5(main);




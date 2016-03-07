import {Component} from 'angular2/core';

@Component({
	selector: 'my-puzzle'
	template: `
		<section class="setup">
			<h2>Game Setup</h2>
			Enter your name please:
			<input type="text" #name (keyup)="0">
		</section>
		<section 
			[ngClass]="{
				puzzle: true,
				solved: switch1Num === switch1.value && switch2Num === switch2.value && switch3Num === switch3.value && switch4Num === switch4.value
			}" 
			[style.display]="name.value === '' ? 'none' : 'block'">
			<h2>The Puzzle:</h2>
			<p>Welcome <span class="name">XXX</span></p>
			<br>
			Switch 1:
			<input type="text" #switch1><br>
			Switch 2:
			<input type="text" #switch2><br>
			Switch 3:
			<input type="text" #switch3><br>
			Switch 4:
			<input type="text" #switch4><br>
		</section>
		<h2>Congragulations XXX, you did it!</h2>
	`
})

export class PuzzleComponent {
	switch1Num: number;
	switch2Num: number;
	switch3Num: number;
	switch4Num: number;
}
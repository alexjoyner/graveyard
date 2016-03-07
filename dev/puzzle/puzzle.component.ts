import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
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
				solved: switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value
			}" 
			[style.display]="name.value === '' ? 'none' : 'block'">
			<h2>The Puzzle | {{switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value ? 'Solved' : 'Not Solved'}}</h2>
			<p>Welcome <span class="name">{{name.value}}</span></p>
			<br>
			Switch 1:
			<input type="text" #switch1 (keyup)="0"><br>
			Switch 2:
			<input type="text" #switch2 (keyup)="0"><br>
			Switch 3:
			<input type="text" #switch3 (keyup)="0"><br>
			Switch 4:
			<input type="text" #switch4 (keyup)="0"><br>
		</section>
		<h2 *ngIf="switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value">Congragulations {{name.value}}, you did it!</h2>
	`
})

export class PuzzleComponent implements OnInit{
	switch1Num: number;
	switch2Num: number;
	switch3Num: number;
	switch4Num: number;

	ngOnInit():any {
		this.switch1Num = Math.round(Math.random());
		this.switch2Num = Math.round(Math.random());
		this.switch3Num = Math.round(Math.random());
		this.switch4Num = Math.round(Math.random());

		console.log(this.switch1Num,this.switch2Num,this.switch3Num,this.switch4Num);
	}
}












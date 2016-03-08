import {Component} from 'angular2/core';

@Component({
	selector: 'my-structeral-directive',
    template: `
    	<section class="directive">
    		<h2>*ngIf</h2>
    		<div>
                Enter a number higher than 10
    			<br>
    			<input type="text" #number (keyup)="0">
    		</div>
    		<div *ngIf="number.value > 10">
    			Number is greater than 10
    		</div>
    	</section>
        <br/>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="#item of list, #i = index">
                        {{item}}{{i}}
                    </li>
                </ul>
            </div>
        </section>
    `
})
export class  StructeralDirective{
	list = ['Apple', 'orange', 'milk'];
}
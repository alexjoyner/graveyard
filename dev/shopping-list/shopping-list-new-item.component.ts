import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
    selector: 'shopping-list-new-item',
    template: `
    	<div>
    		<label for="item-name">Name: </label>
    		<input type="text" id="item-name" [(ngModel)]="item.name">
    	</div>
    	<div>
    		<label for="item-amount">Amount: </label>
    		<input type="text" id="item-amount" [(ngModel)]="item.amount">
    	</div>
    	<button (click)="onClick()">Add Item</button>
    `,
    outputs: ['itemAdded']
})
export class ShoppingListNewItemComponent {
	item = {name: '', amount: 0};
	itemAdded = new EventEmitter<ListItem>();

	onClick() {
		console.log('Adding: ', this.item);
		this.itemAdded.emit(this.item);
	}
}
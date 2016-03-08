import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
    selector: 'shopping-list-item',
    template: `
    	<div>
    		<label for="item-name">Name: </label>
    		<input type="text" id="item-name" [(ngModel)]="item.name">
    	</div>
    	<div>
    		<label for="item-amount">Amount: </label>
    		<input type="text" id="item-amount" [(ngModel)]="item.amount">
    	</div>
    	<button (click)="onDelete()">Delete Item</button>
    `,
    inputs: ['item'],
    outputs: ['removed']
})
export class  ShoppingListItemComponent{
	item = {name: '', amount: 0};
	removed = new EventEmitter<ListItem>();
	onDelete(){
		this.removed.emit(this.item);
	}
}
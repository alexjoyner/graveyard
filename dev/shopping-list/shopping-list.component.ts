import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.Component';
@Component({
    selector: 'shopping-list',
    template: `
    	<section>
    		<shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
    	</section>
    	<section>
    		<h3>My List</h3>
    		<div class="list">
    			<ul>
    				<li *ngFor="#listItem of listItems">{{listItem.name}} {{listItem.amount}}</li>
    			</ul>
    		</div>
    	</section>
    	<section>
    		Edit Items
    	</section>
    `,
    directives: [ShoppingListNewItemComponent]
})
export class ShoppingListComponent {
	listItems = new Array<{name: string, amount: number}>();
	onItemAdded(item: {name: string, amount: number}) {
		console.log({name: item.name, amount: item.amount});
		this.listItems.push({name: item.name, amount: item.amount});
	}
}
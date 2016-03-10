import {Component} from 'angular2/core';
import {ShoppingListEditComponent} from './shopping-list-edit.component';
@Component({ // NO SELECTOR BECAUSE IT IS A ROUTE
    templateUrl: 'dev/shopping-list/shopping-list.template.html',
    directives: [ShoppingListEditComponent]
})
export class ShoppingListComponent {
	
}
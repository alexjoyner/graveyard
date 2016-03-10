import {Component} from 'angular2/core';
import {Ingredient} from '../shared/ingredient';

@Component({
    selector: 'my-shopping-list-edit',
    templateUrl: 'dev/shopping-list/shopping-list-edit.template.html',
    inputs: ['ingredient'],
    styleUrls: ['src/css/shopping-list.css']
})
export class ShoppingListEditComponent {
	ingredient: Ingredient;
}
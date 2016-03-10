import {Component, OnInit} from 'angular2/core';
import {Recipe} from '../shared/recipe';
@Component({
    templateUrl: 'dev/recipe-book/recipe-detail.template.html'
})
export class RecipeDetailCopmonent implements OnInit{
	recipe: Recipe;

	onAddToShoppingList(){

	}
	ngOnInit():any {
		return null;
	}
}
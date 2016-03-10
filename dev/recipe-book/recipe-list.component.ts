import {Component, OnInit} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {Recipe} from '../shared/recipe';

@Component({
    selector: 'my-recipe-list',
    templateUrl: 'dev/recipe-book/recipe-list.template.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[];

	constructor(private _recipeService: RecipeService) {};

	ngOnInit():any {
		this.recipes = this._recipeService.getAllRecipes();
	}
}
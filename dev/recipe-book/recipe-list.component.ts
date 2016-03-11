import {Component, OnInit} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {Recipe} from '../shared/recipe';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-recipe-list',
    templateUrl: 'dev/recipe-book/recipe-list.template.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[];

	constructor(
		private _recipeService: RecipeService, 
		private _router: Router
	) {};
	onSelect(item: Recipe){
		this._router.navigate(['RecipeDetail', {recipeIndex: Number(this._recipeService.getRecipeIndex(item))}]);
	}
	ngOnInit(): any {
		this.recipes = this._recipeService.getAllRecipes();
	}
}
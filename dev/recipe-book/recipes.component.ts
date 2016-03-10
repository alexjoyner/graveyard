import {Component} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
@Component({
	selector: 'my-recipes',
	// template: `
	// 	<div class="master list">
	// 		Recipe Master
	// 	</div>
	// 	<div class="detail">
	// 		Recipe Detail
	// 	</div>
	// `
	templateUrl: 'dev/recipe-book/recipe.template.html',
	providers: [RecipeService],
	directives: [RecipeListComponent]
})
export class RecipesComponent {

}
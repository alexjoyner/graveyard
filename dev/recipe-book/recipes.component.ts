import {Component} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
@Component({
	selector: 'my-recipes',
	templateUrl: 'dev/recipe-book/recipe.template.html',
	providers: [RecipeService],
	directives: [RecipeListComponent]
})
export class RecipesComponent {

}
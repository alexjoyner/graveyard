import {Component} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipeDetailComponent} from './recipe-detail.component';
@Component({
	selector: 'my-recipes',
	templateUrl: 'dev/recipe-book/recipe.template.html',
	providers: [RecipeService],
	directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', name: 'RecipeDetail', component: RecipeDetailComponent, 
	useAsDefault: true},
	{path: '/:editMode', name: 'RecipeEdit', component: RecipeDetailComponent}
])
export class RecipesComponent {

}
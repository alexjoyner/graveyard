import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";
export let RECIPES: Recipe[] = [
	new Recipe(
		'Super Burger', 
		'Very Delicious burger',
		'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
			new Ingredient('Patties', 2),
			new Ingredient('Buns', 3)
		])
];
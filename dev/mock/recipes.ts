import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";
export let RECIPES: Recipe[] = [
	new Recipe(
		'Wiener Schnitzel', 
		'Delicious',
		'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/WienerSchnitzel.jpg',[
			new Ingredient('Pork Meat', 1),
			new Ingredient('salad', 2)
		])
];

import {autoinject} from 'aurelia-framework'

import {RecipeService} from '../services/recipe-dataservice'
import {Recipe} from '../models/recipe'

@autoinject
export class RecipesSection {
   
   
    recipes: Recipe[];
    selectedId: number;

    constructor(private recipeService: RecipeService) {
     
        this.recipes = [];
    }

    activate(): Promise<any> {
        return this.recipeService.all()
            .then(result => { this.recipes = result; });
           
    }

    select(recipe: Recipe) {
        this.selectedId = recipe.id;
        return true;
    }

}
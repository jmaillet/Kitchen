import {autoinject} from 'aurelia-framework'
import {RecipeService} from '../services/recipe-dataservice'
import {Recipe} from '../models/recipe'


@autoinject()
export class RecipeViewModel {
    recipe: Recipe;
    
    constructor(private recipeService: RecipeService) {
      
    }

    activate(info:any) {
        return this.recipeService.get(info.id)
            .then(result => this.recipe = result);
            
    }

}
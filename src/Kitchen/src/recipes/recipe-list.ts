import {autoinject, LogManager} from 'aurelia-framework'

import {RecipeService} from '../services/recipe-dataservice'

import {Recipe} from '../models/recipe'

@autoinject()
export class RecipeListViewModel {

    logger: LogManager
    recipes: Recipe[];
    selectedId: number;

    constructor(private recipeService: RecipeService) {
        this.recipes = [];
        this.logger = new Logger('RecipeListViewModel');
    }


    created(): Promise<any> {
        return this.recipeService.all()
            .then(result => { this.recipes = result; })
            .catch(reason => { this.logger.error(reason, true); });
    }

    select(recipe: Recipe) {
        this.selectedId = recipe.id;
        return true;
    }

}
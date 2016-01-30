﻿import {autoinject} from 'aurelia-framework'
import {RecipeService} from '../services/recipe-dataservice'
import {Recipe} from '../models/recipe'
import {Logger} from '../common/logger'

@autoinject()
export class RecipeViewModel {
    recipe: Recipe;
    private logger: Logger;
    constructor(private recipeService: RecipeService) {
        this.logger = new Logger('RecipeViewModel');
    }

    activate(id: number) {
        return this.recipeService.get(id)
            .then(result => this.recipe = result)
            .catch(error => this.logger.error(error, true));
    }

}
import {autoinject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {RecipeService} from '../services/recipe-dataservice'
import {Logger} from '../common/logger'
import {Recipe} from '../models/recipe'

@autoinject()
export class RecipeListViewModel {

    logger: Logger;
    recipes: Recipe[];

    constructor(private router:Router, private recipeService: RecipeService) {
        this.logger = new Logger('RecipeListViewModel');
    }

    activate(): Promise<any> {
        return this.recipeService.get()
           .then (result => { this.recipes = result; })
           .catch(reason => { this.logger.error(reason, true); });
    }

    edit(id: number) {
        this.router.navigate('recipes/' + id); 
    }
}
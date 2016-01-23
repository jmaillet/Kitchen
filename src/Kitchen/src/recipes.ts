
import {Logger} from './common/logger';
import {RecipeService} from './services/recipe-dataservice';
import {inject} from 'aurelia-framework';


@inject(RecipeService)
export class App {

    recipes: Recipe[];
    logger: Logger;

    constructor(private recipeService: RecipeService) {
        this.logger = new Logger('App');
    }

    activate(): Promise<void> {
        return this.recipeService.getRecipes()
            .then(result => { this.recipes = result; })
            .catch(reason => { this.logger.error(reason, true); });
    }
}
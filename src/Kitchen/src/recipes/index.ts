
import {Router, RouterConfiguration} from 'aurelia-router'
import {Logger} from '../common/logger';
import {RecipeService} from 'services/recipe-dataservice';
import {Recipe} from 'models/recipe'

export class RecipesSection {
    
    logger: Logger;
    router: Router;
    recipes: Recipe[]
    constructor(private recipeService: RecipeService) {
        this.logger = new Logger('App');
    }

    activate(): Promise<any> {
        return this.recipeService.get()
            .then(result => { this.recipes = result; })
            .catch(reason => { this.logger.error(reason, true); });
    }

    edit(id: number) {
        this.router.navigate('recipes/' + id);
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        this.logger.debug("configuring Router ...");
        config.title = 'Kitchen';
        config.map([
            { route: '', moduleId: 'none', title: 'Select' },
            { route: ':id', moduleId: './recipe',  }

        ]);

        this.router = router;
    }
}
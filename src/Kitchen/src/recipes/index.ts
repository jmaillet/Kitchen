
import {Router, RouterConfiguration} from 'aurelia-router'
import {Logger} from './common/logger';

export class RecipesSection {
    
    logger: Logger;
    router: Router;
    constructor() {
        this.logger = new Logger('App');
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        this.logger.debug("configuring Router ...");
        config.title = 'Kitchen';
        config.map([
            { route: ['', 'recipes'],  moduleId: 'recipe-list'},
            { route: 'recipes/:id', moduleId: 'recipe' }

        ]);

        this.router = router;
    }
}
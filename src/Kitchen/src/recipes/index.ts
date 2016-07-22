
import {Router, RouterConfiguration} from 'aurelia-router'
import {autoinject} from 'aurelia-framework'

import {RecipeService} from '../services/recipe-dataservice'
import {Recipe} from '../models/recipe'

@autoinject
export class RecipesSection {
   
    router: Router;
    recipes: Recipe[];
    selectedId: number;

    constructor(private recipeService: RecipeService) {
     
        this.recipes = [];
    }
 
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Kitchen';
        config.map([
            { route: '', moduleId: './no-selection', title: 'Select' },
            { route: ':id', moduleId: './recipe',  }

        ]);

        this.router = router;
    }
    created(): Promise<any> {
        return this.recipeService.all()
            .then(result => { this.recipes = result; });
           
    }

    select(recipe: Recipe) {
        this.selectedId = recipe.id;
        return true;
    }

}
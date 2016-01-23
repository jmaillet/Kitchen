import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
      console.log("configuring Router ...");
    config.title = 'Kitchen';
    config.map([
      { route: ['', 'recipes'], name: 'recipes',      moduleId: 'recipes',      nav: true, title: 'Recipes' },
     
    ]);

    this.router = router;
  }
}

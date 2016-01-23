var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", './common/logger', './services/recipe-dataservice', 'aurelia-framework'], function (require, exports, logger_1, recipe_dataservice_1, aurelia_framework_1) {
    var App = (function () {
        function App(recipeService) {
            this.recipeService = recipeService;
            this.logger = new logger_1.Logger('App');
        }
        App.prototype.activate = function () {
            var _this = this;
            return this.recipeService.getRecipes()
                .then(function (result) { _this.recipes = result; })
                .catch(function (reason) { _this.logger.error(reason, true); });
        };
        App = __decorate([
            aurelia_framework_1.inject(recipe_dataservice_1.RecipeService), 
            __metadata('design:paramtypes', [recipe_dataservice_1.RecipeService])
        ], App);
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=recipes.js.map
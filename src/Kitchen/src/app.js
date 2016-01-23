define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            console.log("configuring Router ...");
            config.title = 'Kitchen';
            config.map([
                { route: ['', 'recipes'], name: 'recipes', moduleId: 'recipes', nav: true, title: 'Recipes' },
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map
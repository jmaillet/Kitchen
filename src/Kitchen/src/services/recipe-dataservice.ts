import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class RecipeService {

    constructor(private http: HttpClient) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http.get('recipe/get')
            .then(response => <Recipe[]>response.content);
    }

}
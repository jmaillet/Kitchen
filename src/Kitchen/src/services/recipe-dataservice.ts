import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

import {Recipe} from '../models/recipe';



@autoinject()
export class RecipeService {

    constructor(private http: HttpClient) { }

    get(id: number): Promise<Recipe> {
        return this.fetch(`api/recipes/${id}`);
    }

    all(): Promise<Recipe[]> {
        return this.fetch('api/recipes');
    }

    private fetch<T>(url: string): Promise<T> {
        return this.http.fetch(url)
            .then(response => response.json())
            .then(json => json as T);
    }



}   
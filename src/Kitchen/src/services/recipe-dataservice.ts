import {HttpClient} from 'aurelia-http-client';
import {autoinject} from 'aurelia-framework';

import {Recipe} from '../models/recipe'


@autoinject()
export class RecipeService {

    constructor(private http: HttpClient) { }

    get(id?: number): Promise<any> {
        let queryString: string = id ? '?id=' + id : '';
        return this.http.get('recipe/get' + queryString)
            .then(response => response.content);
    }



}
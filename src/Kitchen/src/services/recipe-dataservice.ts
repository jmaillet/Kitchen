import {HttpClient} from 'aurelia-http-client';
import {autoinject} from 'aurelia-framework';

import {Recipe} from '../models/recipe'
import {Logger} from '../common/logger'


@autoinject()
export class RecipeService {

    private logger: Logger;

    constructor(private http: HttpClient) {
        this.logger = new Logger('RecipeService');
    }

    get(id?: number): Promise<any> {
        let detail: string = id ? id.toString() : '';
        this.logger.debug(detail);
        return this.http.get('api/recipes/' + detail)
            .then(response => response.content);
    }



}
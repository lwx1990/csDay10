import Dexie from 'dexie';
import {Injectable} from '@angular/core';

@Injectable()


export class articleDatabase extends Dexie {
    private article: Dexie.Table<any, any> ;

    constructor(){
        //database name
        super('articledb');

         //setup schema for v1
         this.version(1).stores({
             article: 'countrycode'
         })

         // get a reference to the news collection
         this.article = this.table('article')

    }

    async saveArticle(article){
        return await this.article.put(article);
    }

    async getArticle(countrycode){
        return await this.article.get(countrycode)
    }

}   
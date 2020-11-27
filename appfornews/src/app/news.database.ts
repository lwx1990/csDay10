import Dexie from 'dexie';
import {Injectable} from '@angular/core';
import {News} from './model';

@Injectable()

export class NewsDatabase extends Dexie {
    private newsapi: Dexie.Table<any, any> ;

    constructor(){
        //database name
        super('newsdb');

         //setup schema for v1
         this.version(1).stores({
             newsapi: '++id, api'
         })

         // get a reference to the news collection
         this.newsapi = this.table('newsapi')

    }


    async saveAPI(n){
        await this.newsapi.clear();
        await this.newsapi.put(n);
    }

    async getAPI(){
        let result = await this.newsapi.toCollection().first()
        console.log(await result)
        return result['api']
        
    }

    async deleteAPI(){
        await this.newsapi.clear();
    }
}
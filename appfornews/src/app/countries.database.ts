import Dexie from 'dexie';
import {Injectable} from '@angular/core';
import { Countries } from './model';

@Injectable()

export class CountryDatabase extends Dexie {
    private countrieslist: Dexie.Table<Countries, number> ;

    constructor(){
        //database name
        super('countriesdb');

         //setup schema for v1
         this.version(1).stores({
             countrieslist: '++id'
         })

         // get a reference to the news collection
         this.countrieslist = this.table('countrieslist')

    }

    async saveCountry(c: Countries): Promise<any>{
        return await this.countrieslist.put(c);
    }


   

}
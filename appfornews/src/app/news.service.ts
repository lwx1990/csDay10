import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from './model';


// https://newsapi.org/v2/top-headlines
// ?q=trump
// &country=de
// &category=business
// &apiKey=API_KEY

@Injectable()

export class NewService {

    
    constructor(private http: HttpClient){}

    async getCountries(): Promise<Countries[]> {
        return await this.http.get<Countries[]>('https://restcountries.eu/rest/v2/alpha?codes=ae;ar;at;au;be;bg;br;ca;ch;cn;cu')
        .toPromise();
    }



    async getNews(code: string, apikey: string): Promise<any> {
        let newsUrl = 'https://newsapi.org/v2/top-headlines';
        let params = new HttpParams();
        params = params.set('country', code)
        // params = params.set('category', 'general')
        // params = params.set('country', '30')
        let result = await this.http.get<{}>(newsUrl,{
            params: params,
            headers: {
                'X-Api-Key': apikey
            }
        })
        .toPromise();
        return result
    }




    
}
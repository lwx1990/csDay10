import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleDatabase } from '../article.database';
import { CountryDatabase } from '../countries.database';
import { Countries } from '../model';
import { NewsDatabase } from '../news.database';
import { NewService } from '../news.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  acode: string;
  newsArray = [];

  ctname: string


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private resultSvc: NewService, 
    private coutrydb: CountryDatabase, private newdb: NewsDatabase, private articledb: articleDatabase) { }

  ngOnInit(): void{
      this.acode = this.activatedRoute.snapshot.params['country']
      console.log(this.acode)
      this.getNews(this.acode)
    
  }

  async getNews(acode){

    let curtime = Date.now();

    let apikeys = await this.newdb.getAPI()

    let savearticle = await this.articledb.getArticle(acode)
    
    if (savearticle) {
      let cachestamp = Date.parse(savearticle['timestamp'])

      let difference = (curtime - cachestamp)/1000/60

      if (difference >= 5){
        console.log('time call')
        await this.resultSvc.getNews(acode, apikeys);

        console.log('api call')
       let result = (await this.resultSvc.getNews(acode, apikeys))
       this.newsArray = result['articles']
       result.countrycode = acode
       result.timestamp = new Date()
    
       this.articledb.saveArticle(result)
       return 
      }

      this.newsArray = savearticle['articles']
      console.log('from caache' )
    }
    else {
      await this.resultSvc.getNews(acode, apikeys);

      console.log('api call')
      let result = (await this.resultSvc.getNews(acode, apikeys))
      this.newsArray = result['articles']
      result.countrycode = acode
      result.timestamp = new Date()
    
      this.articledb.saveArticle(result)
    
    }



    
  }


}

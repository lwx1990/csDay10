import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private resultSvc: NewService, private coutrydb: CountryDatabase, private newdb: NewsDatabase) { }

  ngOnInit(): void{
      this.acode = this.activatedRoute.snapshot.params['country']
      console.log(this.acode)
      this.getNews(this.acode)
    
  }

  async getNews(acode){
    let apikeys = await this.newdb.getAPI()
    await this.resultSvc.getNews(acode, apikeys);
    this.newsArray = (await this.resultSvc.getNews(acode, apikeys))['articles'];
    console.log(await this.resultSvc.getNews(acode, apikeys))
  }
}

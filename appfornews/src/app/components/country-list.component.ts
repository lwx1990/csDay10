import { Component, OnInit } from '@angular/core';
import { CountryDatabase } from '../countries.database';
import { Countries } from '../model';
import { NewService } from '../news.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})


export class CountryListComponent implements OnInit {

  countries = [];

  
  constructor(private newSvc: NewService, private countrydb: CountryDatabase) { }

  
  async ngOnInit(){

    this.countries = await this.newSvc.getCountries()
    console.info('>> contents', this.countries)

    for (const o of this.countries) {
      await this.countrydb.saveCountry(o);
   }

     
    
  }


}

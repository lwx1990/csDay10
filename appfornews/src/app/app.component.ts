import { Component } from '@angular/core';
import { Countries } from './model';
import {NewService} from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appfornews';

  // countries: Countries[] = [];

  constructor(private newSvc: NewService ) {}
  
  async ngOnInit(){
  
  //  this.countries = await this.newSvc.getCountries()
  //   console.info('>> contents', this.countries)
  
 }


}

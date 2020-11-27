import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SettingComponent } from './components/setting.component';
import { NewsDatabase } from './news.database';
import { MainComponent } from './components/main.component';
import { CountryListComponent } from './components/country-list.component';
import { ResultsComponent } from './components/results.component';
import { NewService } from './news.service';
import { CountryDatabase } from './countries.database';

const ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'country-list', component: CountryListComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'country-list/:country', component: ResultsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    MainComponent,
    CountryListComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsDatabase,NewService,CountryDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

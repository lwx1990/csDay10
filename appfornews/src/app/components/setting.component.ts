import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {News} from '../model';
import { NewsDatabase } from '../news.database';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  form: FormGroup
  apikey: string

  constructor(private router: Router, private fb: FormBuilder, private newsdb: NewsDatabase) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      api: this.fb.control('',[Validators.required]),

    })
   
    this.getkeyapi()
  }

  async addAPI(){
    const set: News = {
      api: this.form.get('api').value,
    }
    await this.newsdb.saveAPI(set);
    this.apikey = this.form.get('api').value

    this.router.navigate(['/country-list'])
  }

  async deleteAPI(){
    
    await this.newsdb.deleteAPI()
    this.apikey = ""
    this.form.reset()
  }

  async getkeyapi(){
     this.apikey = await this.newsdb.getAPI()
     this.form.get('api').setValue(this.apikey)
  }

  goBacktoCountry(){
    this.router.navigate(['/country-list'])
  }

}

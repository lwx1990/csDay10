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

  constructor(private router: Router, private fb: FormBuilder, private newsdb: NewsDatabase) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      api: this.fb.control('',[Validators.required]),

    })
  }

  async addAPI(){
    const set: News = {
      api: this.form.get('api').value,
    }
    await this.newsdb.saveAPI(set);
    
  }

  async deleteAPI(){
    
    await this.newsdb.deleteAPI()
  }

  goBacktoCountry(){
    this.router.navigate(['/country-list'])
  }

}

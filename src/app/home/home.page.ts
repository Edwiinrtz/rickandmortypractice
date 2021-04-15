import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public httpClient:HttpClient) {}
  

  characters: any;

  async ngOnInit() {
    await this.httpClient.get("https://rickandmortyapi.com/api/character/").subscribe(data=> {this.characters = data['results'];})

  }


}

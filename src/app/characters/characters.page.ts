import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(private actRoute: ActivatedRoute, private httpClient:HttpClient){}
  
  id:string;
  character:any;
  async ngOnInit() {
    this.id=this.actRoute.snapshot.paramMap.get('id')
    
    this.httpClient.get("https://rickandmortyapi.com/api/character/" +this.id).subscribe(data =>{ this.character = data})
  }

}

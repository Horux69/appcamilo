import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { log } from 'console';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(private rickAndMortySvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters()
  }

  //Obterner personajes

  getCharacters(event?: any) {
    this.params.page += 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {

        this.characters.push(...res.results)
        console.log(this.characters);
        
        if(event) event.target.complete();

      },
      error: (error: any) => {

        if(event) event.target.complete();

      }
    })
  }

  //Buscar personajes
  
  searchCharacters() {
    this.params.page = 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {

        this.characters = res.results


      },
      error: (error: any) => {


      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemons: any;

  constructor(
    private _pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  public getAllPokemons(): void {
    this._pokemonService.getAll().subscribe(
      (res) => {
        this.pokemons = res;
        console.log('res', res);
      },
      (error) => {
        console.error('error', error);
      }
    );
  }
}

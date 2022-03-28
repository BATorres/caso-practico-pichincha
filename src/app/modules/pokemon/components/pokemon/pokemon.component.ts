import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  public pokemons: any[] = [];
  public tableHeader: string[] = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
  public showForm: boolean = false;

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
      },
      (error) => {
        console.error('error', error);
      }
    );
  }

  public searchPokemons(event: any): void {
    const search = event.target.value.toLowerCase().trim();

    if (search !== '') {
      /* const filteredPokemons = [...this.pokemons];
      this.pokemons = filteredPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search)); */
    } else {
      this.getAllPokemons();
    }
  }

  public createPokemon(): any {
    window.scroll(0, this.scrollContainer.nativeElement.scrollHeight);
    return this.showForm = !this.showForm;
  }
}

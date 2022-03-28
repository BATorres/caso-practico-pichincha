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
  public selectedPokemon: any;

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
    this.showForm = true;
    this.selectedPokemon = undefined;
    window.scroll(0, this.scrollContainer.nativeElement.scrollHeight);
  }

  public editPokemon(pokemon: any): any {
    this.selectedPokemon = pokemon;
    this.showForm = true;
    window.scroll(0, this.scrollContainer.nativeElement.scrollHeight);
  }

  public deletePokemon(currentPokemon: any): any {
    const index = this.pokemons.findIndex((pokemon) => pokemon.id === currentPokemon.id);

    if (index !== -1) {
      this.pokemons.splice(index, 1);
      this._pokemonService.deletePokemon(currentPokemon.id).subscribe(
        (deletedPokemon) => {},
        (error) => {
          console.error('error', error);
        }
      );
    }
  }

  public listenComponent(event): any {
    if (event) {
      const index = this.pokemons.findIndex((pokemon) => pokemon.id === event.id);
      this.showForm = false;

      if (index !== -1) {
        this.pokemons[index] = event;
      } else {
        this.pokemons.push(event);
      }
    }
  }

  public listenCancelEvent(event): any {
    if (event) {
      this.showForm = false;
      window.scroll(0, 0);
    }
  }
}

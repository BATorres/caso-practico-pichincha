import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }

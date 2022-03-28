import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormComponent } from './components/form/form.component';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';


@NgModule({
  declarations: [
    PokemonComponent,
    FormComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PokemonModule { }

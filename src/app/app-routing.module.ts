import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then(
        (module) => module.PokemonModule
      ),
  },
  {
    path: '**',
    redirectTo: 'pokemon',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

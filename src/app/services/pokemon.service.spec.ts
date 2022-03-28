import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonServiceService', () => {
  let service: PokemonService;

  let testPokemon = {
    "id": 6650,
    "name": "Charmander",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "type": "fire",
    "hp": 50,
    "attack": 50,
    "defense": 50,
    "idAuthor": 1,
    "created_at": "2022-03-15T16:51:59.585Z",
    "updated_at": "2022-03-28T05:43:54.113Z"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        PokemonService,
        {
          provide: '',
          useValue: '',
        }
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll debe hacer una petición GET HTTP y devolver un arreglo de datos', () => {
    service.getAll().subscribe(res => {
      expect(res.length).toBeGreaterThanOrEqual(10);
     }); 
   });

   it('getPokemon debe hacer una petición GET HTTP enviando el id del pokemon deseado', () => {
    service.getPokemon(6650).subscribe(res => {
      expect(res).toEqual(testPokemon); 
     }); 
   });

   it('updatePokemon debe hacer una petición PUT HTTP con el id del pokemon y los datos a actualizar en un json', () => {
    const updateObj = { type: "fire" };
    service.updatePokemon(6672, updateObj).subscribe(res => {
      expect(res.type).toBe('fire'); 
     }); 
   });

   it('savePokemon debe hacer una petición POST HTTP con los datos del pokemon en un json', () => {
    const createObj = { name: "Lugia",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    type: "fire",
    hp: 50,
    attack: 50,
    defense: 50,
    idAuthor: 1, };
    service.savePokemon(createObj).subscribe(res => {
      expect(res.name).toBe('Lugia'); 
     }); 
   });

   it('countPokemon debe hacer una petición GET HTTP y devolver el número de pokemones existentes', () => {
    service.countPokemon().subscribe(res => {
      expect(res).toBeGreaterThanOrEqual(10);
     }); 
   });
});

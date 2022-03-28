import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() public pokemon: any;
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _pokemonService: PokemonService,
  ) { }

  ngOnChanges(changes: SimpleChanges): any {
    this.buildForm();

    if (changes['pokemon'].currentValue != undefined) {
      this.form.patchValue({...this.pokemon});
    }
  }

  public buildForm(): void {
    this.form = this._formBuilder.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      attack: [50, Validators.required],
      defense: [50, Validators.required],
    });
  }

  get fc() {
    return this.form.controls;
  }

  public submit(): void {
    if (this.pokemon !== undefined) {
      this._pokemonService.updatePokemon(this.pokemon.id, this.form.value).subscribe(
        (res) => {
          console.log('res', res)
        },
        (error) => {
          console.error('error', error)
        }
      );
    } else {
      this._pokemonService.savePokemon({...this.form.value, hp: 0, type: 'fire', idAuthor: 1}).subscribe(
        (res) => {
          console.log('res', res)
        },
        (error) => {
          console.error('error', error)
        }
      );
    }
  }
}

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() public pokemon: any;
  @Output() public successEvent: EventEmitter<any | boolean> = new EventEmitter();
  @Output() public cancelEvent: EventEmitter<boolean> = new EventEmitter();

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
      hp: 50,
      type: 'fire',
      idAuthor: 1,
    });
  }

  get fc() {
    return this.form.controls;
  }

  public submit(): void {
    if (this.pokemon !== undefined) {
      this._pokemonService.updatePokemon(this.pokemon.id, this.form.value).subscribe(
        (editedPokemon) => {
          this.successEvent.emit(editedPokemon);
        },
        (error) => {
          this.successEvent.emit(false);
          console.error('error', error);
        }
      );
    } else {
      this._pokemonService.savePokemon(this.form.value).subscribe(
        (createdPokemon) => {
          this.successEvent.emit(createdPokemon);
        },
        (error) => {
          this.successEvent.emit(false);
          console.error('error', error);
        }
      );
    }
  }

  public cancel(): void {
    this.cancelEvent.emit(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
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

  }
}

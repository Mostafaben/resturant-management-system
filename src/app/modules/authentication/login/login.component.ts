import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public _form: FormGroup;
  constructor(private _fb: FormBuilder) {
    this._form = this._fb.group([
      ['email', ['', Validators.required, Validators.email]],
      ['password', ['', Validators.required, Validators.minLength(8)]],
      [
        'passwordConfirmation',
        ['', Validators.required, Validators.minLength(8)],
      ],
    ]);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  form!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group([
      'email',
      ['', Validators.required, Validators.email],
    ]);
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.form.value);
  }
}

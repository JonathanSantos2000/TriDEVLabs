import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/Shared/validators/password_match_validator';

@Component({
  selector: 'app-page-registro',
  templateUrl: './page-registro.component.html',
  styleUrls: ['./page-registro.component.css'],
})


export class PageRegistroComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordMatchValidator('password', 'confirmPassword'),
      }
    );
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {}
}

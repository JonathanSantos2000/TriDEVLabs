import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import type { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: 'Não deveria estar vazio',
  email: 'E-mail não está correto',
  minlength: 'Deve conter no minimo 5 caracteres',
  notMatch: 'senhas não correspondem',
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnInit {
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorWhen: boolean = true;

  errorMessages: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  checkValidation() {
    const errors = this.control.errors;

    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map((key) => VALIDATORS_MESSAGES[key]);
  }
}

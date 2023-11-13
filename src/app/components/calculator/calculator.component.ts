import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  public sum = this.fb.control(1000);
  public days = this.fb.control(10);
  constructor( public fb: FormBuilder) {
  }
}

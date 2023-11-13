import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent {
  public sum = this.fb.control(3200);
  constructor( public fb: FormBuilder) {
  }
}

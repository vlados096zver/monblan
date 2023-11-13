import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnInit {
  @Input() min: number = 1;
  @Input() max: number = 50;
  @Input() step: number = 1;
  @Input() control = new FormControl<number | null>(null);

  componentControl = new FormControl<number | null>(null);
  currentValue: number | null = null;

  ngOnInit() {
    const value = this.currentValue = this.control.value;
    this.componentControl.setValue(value);
    this.componentControl.valueChanges.subscribe((res: number | null) => {
      if (res !== this.currentValue) {
        this.currentValue = res;
        this.control.setValue(res);
      }
    });
    this.control.valueChanges.subscribe((res: number | null) => {
      if (res !== this.currentValue) {
        this.currentValue = res;
        this.componentControl.setValue(res);
      }
    });
  }
  minus() {
    if (this.currentValue && this.currentValue > this.min) {
      this.currentValue = this.currentValue - this.step;
      this.componentControl.setValue(this.currentValue);
      this.control.setValue(this.currentValue)
    }
  }
  plus() {
    if (this.currentValue && this.currentValue < this.max) {
      this.currentValue = this.currentValue + this.step;
      this.componentControl.setValue(this.currentValue);
      this.control.setValue(this.currentValue)
    }
  }
}

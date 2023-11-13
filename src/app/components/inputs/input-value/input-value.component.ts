import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent {
  @Input() control = new FormControl<number | null>(null);
  @Input() value = 0;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;

  componentControl = new FormControl<number | null>(null);
  currentValue: number | null = null;

  ngOnInit() {

    if (this.min !== undefined && this.max !== undefined && this.min > this.max) {
      console.error('Min cannot be smaller then max');
      return;
    }

    const value = this.currentValue = this.control.value;
    this.componentControl.setValue(value);
    this.componentControl.valueChanges.subscribe((res: number | null) => {
      if (res !== this.currentValue) {
        if (res !== null) {
          let componentControlValue = res;
          if (this.step !== undefined) {
            const stepCoefficient = 1 / this.step;
            componentControlValue = Math.round(componentControlValue * stepCoefficient) / stepCoefficient;
          }
          if (this.min !== undefined && this.min > componentControlValue) {
            componentControlValue = this.min;
          }
          if (this.max !== undefined && this.max < componentControlValue) {
            componentControlValue = this.max;
          }
          this.currentValue = componentControlValue;
          this.control.setValue(componentControlValue);
          if (componentControlValue !== res) {
            this.componentControl.setValue(componentControlValue);
          }
        } else {
          this.control.setValue(res);
        }
      }
    });
    this.control.valueChanges.subscribe((res: number | null) => {
      if (res !== this.currentValue) {
        this.currentValue = res;
        this.componentControl.setValue(res);
      }
    });
  }
}

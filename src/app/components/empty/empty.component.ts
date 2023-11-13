import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  emitTabCreditClickEvent() {
    this.onButtonClick.emit();
  }
}

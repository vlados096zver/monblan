import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-cabinet',
    templateUrl: './icon-cabinet.component.svg',
    styles: [`
      :host {
        display: block;
      }
      svg {
        display: block;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCabinetComponent {
}

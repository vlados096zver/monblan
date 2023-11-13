import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-plus',
    templateUrl: './icon-plus.component.svg',
    styles: [`
      :host {
        display: flex;
        align-items: center;
        width: 24px;
        height: 24px;
      }
      svg {
        display: block;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPlusComponent {
}

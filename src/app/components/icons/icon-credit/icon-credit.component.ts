import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-credit',
    templateUrl: './icon-credit.component.svg',
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
export class IconCreditComponent {
}

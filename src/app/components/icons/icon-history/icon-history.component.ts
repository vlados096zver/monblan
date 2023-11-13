import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-history',
    templateUrl: './icon-history.component.svg',
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
export class IconHistoryComponent {
}

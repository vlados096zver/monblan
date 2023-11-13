import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-load',
    templateUrl: './icon-load.component.svg',
    styles: [`
      :host {
        display: block;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLoadComponent {
}

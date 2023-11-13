import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-doc',
    templateUrl: './icon-doc.component.svg',
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
export class IconDocComponent {
}

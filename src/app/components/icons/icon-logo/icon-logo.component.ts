import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-logo',
    templateUrl: './icon-logo.component.svg',
    styles: [`
      :host {
        display: block;
        max-width: 127px;
      }
      :host svg {
        display: block;
        max-width: 100%;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLogoComponent {
    @Input() color = '#FA7D43';
}

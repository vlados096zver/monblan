import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-pdf',
    templateUrl: './icon-pdf.component.svg',
    styles: [`
      :host {
        display: block;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPdfComponent {
}

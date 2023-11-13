import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-empty',
    templateUrl: './icon-empty.component.svg',
    styles: [`
      :host {
        display: block;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconEmptyComponent {
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [class.classX]="value == 'X'" [class.classO]="value == 'O'">
      {{ value }}
    </button>
  `,
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}

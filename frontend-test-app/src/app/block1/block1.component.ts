import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrl: './block1.component.scss',
})
export class Block1Component {
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string = '';

  constructor() {}

  onRadioChange(): void {
    this.optionSelected.emit(this.selectedOption);
  }
}

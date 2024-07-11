import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrl: './block1.component.scss'
})
export class Block1Component {
  selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();

  constructor() {}

  onRadioChange(): void {
    this.optionSelected.emit(this.selectedOption);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-test-app';

  selectedOptionFromBlock1: string = '';

  onOptionSelected(selectedOption: string): void {
    this.selectedOptionFromBlock1 = selectedOption;
  }
}

import { Component } from '@angular/core';
import { Data } from './shared/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-test-app';
  clickedButtonValue: number = 0;
  selectedOption: string = '';
  receivedData: Data[] = [];
  isPersonalDataVisible: boolean = false;

  onOptionSelected(selectedOption: string): void {
    this.selectedOption = selectedOption;
  }

  onReceiveData(data: Data[]): void {
    this.receivedData = data;
  }

  onShowPersonalDetails(): void {
    this.isPersonalDataVisible = !this.isPersonalDataVisible;
  }
}

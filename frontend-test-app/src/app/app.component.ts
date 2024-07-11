import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './shared/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'frontend-test-app';
  clickedButtonValue: number = 0;
  selectedOption: string = '';
  receivedData: Data[] = [];
  isPersonalDataVisible: boolean = false;
  isShowCreateModalVisible: boolean = false;
  isShowEditModalVisible: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Data[]>('assets/data.json').subscribe((data) => {

    if (!localStorage.getItem('myData')) {
      localStorage.setItem('myData', JSON.stringify(data));
    }
  });
  }

  onOptionSelected(selectedOption: string): void {
    this.selectedOption = selectedOption;
  }

  onReceiveData(data: Data[]): void {
    this.receivedData = data;
  }

  onShowPersonalDetails(): void {
    this.isPersonalDataVisible = !this.isPersonalDataVisible;
  }

  onShowCreateModal(): void {
    this.isShowCreateModalVisible = !this.isShowCreateModalVisible;
    if (this.isShowEditModalVisible) {
      this.isShowEditModalVisible = false;
    }
  }

  onShowEditModal(): void {
    this.isShowEditModalVisible = !this.isShowEditModalVisible;
    if (this.isShowCreateModalVisible) {
      this.isShowCreateModalVisible = false;
    }
  }
}

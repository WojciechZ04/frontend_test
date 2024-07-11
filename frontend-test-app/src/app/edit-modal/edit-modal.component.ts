import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Data } from '../shared/data.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss',
})
export class EditModalComponent implements OnInit {
  @Output() showEditModal = new EventEmitter<void>();
  @Input() isShowEditModalVisible: boolean = false;
  selectedId: number | null = null;
  ids: number[] = [];
  showEditControls: boolean = false;
  inputValue: string;

  constructor() {
    this.inputValue = '';
  }

  ngOnInit(): void {
    this.loadIds();
  }

  loadIds(): void {
    const existingData = localStorage.getItem('myData');
    if (existingData) {
      const myData = JSON.parse(existingData);
      this.ids = myData.map((item: { id: number; text: string }) => item.id);
    }
  }

  editData() {
    if (this.selectedId !== null) {
      this.showEditControls = true;
      const existingData = localStorage.getItem('myData');
      if (existingData) {
        const myData = JSON.parse(existingData);
        const selectedIdNumber = Number(this.selectedId);
        const selectedItem = myData.find(
          (item: { id: number; text: string }) => item.id === selectedIdNumber
        );
        if (selectedItem) {
          this.inputValue = selectedItem.text;
        } else {
          window.alert('Nie znaleziono danych dla wybranego ID.');
        }
      }
    } else {
      window.alert('Wybierz element do edytowania.');
    }
  }

  saveData() {
    const existingData = localStorage.getItem('myData');
    let myData = existingData ? JSON.parse(existingData) : [];
  
    const selectedIdNumber = Number(this.selectedId);
    const newData = { id: selectedIdNumber, text: this.inputValue };
  
    const existingIndex = myData.findIndex((item: Data) => item.id === selectedIdNumber);
  
    if (existingIndex !== -1) {
      // Update existing item
      myData[existingIndex] = newData;
    } else {
      // Add new item
      myData.push(newData);
    }
  
    localStorage.setItem('myData', JSON.stringify(myData));
  
    this.selectedId = null;
    this.showEditControls = false;
    this.closeEditModal();
  }

  deleteData() {
    if (this.selectedId !== null) {
      const existingData = localStorage.getItem('myData');
      let myData = existingData ? JSON.parse(existingData) : [];

      const selectedIdNumber = Number(this.selectedId);

      myData = myData.filter((item: Data) => item.id !== selectedIdNumber);

      localStorage.setItem('myData', JSON.stringify(myData));

      this.selectedId = null;
      this.closeEditModal();
      window.location.reload();
    } else {
      window.alert('Wybierz element do usunięcia.');
    }
  }

  closeEditModal() {
    this.showEditControls = false;
    this.showEditModal.emit();
  }
}

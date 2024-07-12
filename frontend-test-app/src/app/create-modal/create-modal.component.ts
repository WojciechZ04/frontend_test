import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss',
})
export class CreateModalComponent {
  @Output() showCreateModal = new EventEmitter<void>();
  @Input() isShowCreateModalVisible: boolean = false;
  inputValue: string;

  constructor() {
    this.inputValue = '';
  }

  saveData() {
    const existingData = localStorage.getItem('myData');
    let myData = existingData ? JSON.parse(existingData) : [];

    const newId = myData.length + 1;
    const newData = { id: newId, text: this.inputValue };

    myData.push(newData);

    localStorage.setItem('myData', JSON.stringify(myData));

    this.closeCreateModal();
    window.location.reload();
  }

  closeCreateModal() {
    this.showCreateModal.emit();
  }
}

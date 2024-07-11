import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../shared/data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() showPersonalDetails = new EventEmitter<void>();
  @Output() showCreateModal = new EventEmitter<void>();
  @Output() showEditModal = new EventEmitter<void>();

  isViewportVisible: boolean = false;
  isPersonalDataVisible: boolean = false;

  constructor(private http: HttpClient) {}

  toggleViewport(): void {
    this.isViewportVisible = !this.isViewportVisible;
  }

  reset(): void {
    this.http.get<Data[]>('assets/data.json').subscribe((data) => {
        localStorage.setItem('myData', JSON.stringify(data));
    });
    window.location.reload();
  }

  togglePersonalData() {
    this.isPersonalDataVisible = !this.isPersonalDataVisible;
    this.showPersonalDetails.emit();
  }

  openCreateModal() {
    this.showCreateModal.emit();
  }

  openEditModal() {
    this.showEditModal.emit();
  }


}

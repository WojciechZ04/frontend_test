import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() showPersonalDetails = new EventEmitter<void>();
  isViewportVisible: boolean = false;
  isPersonalDataVisible: boolean = false;

  toggleViewport(): void {
    this.isViewportVisible = !this.isViewportVisible;
  }

  reset(): void {
    window.location.reload();
  }

  togglePersonalData() {
    this.isPersonalDataVisible = !this.isPersonalDataVisible;
    this.showPersonalDetails.emit();
  }
}

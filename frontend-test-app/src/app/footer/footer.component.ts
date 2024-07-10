import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isViewportVisible: boolean = false;

  toggleViewport(): void {
    this.isViewportVisible = !this.isViewportVisible;
  }

  reset(): void {
    window.location.reload(); // Refreshes the page
  }
}

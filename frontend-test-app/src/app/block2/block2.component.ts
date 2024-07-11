import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Data } from '../shared/data.model';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrl: './block2.component.scss',
})
export class Block2Component implements OnInit {
  @Output() dataSent = new EventEmitter<Data[]>();
  @Output() buttonClicked = new EventEmitter<number>();
  @Input() radioSelection!: string;
  textToShow: string | undefined;

  displayedData: Data[] = [];
  completeData: Data[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
    this.pushRandomData();
    this.sendDataOnInit();
  }

  sendDataOnInit(): void {
    this.dataSent.emit(this.displayedData);
  }

  sendData(buttonId: number): void {
    this.fetchData();
    if (this.radioSelection) {
      if (buttonId === 1) {
        this.replaceData();
      } else if (buttonId === 2) {
        this.addData();
      }

      this.displayedData.sort((a, b) => a.text.localeCompare(b.text));
      this.dataSent.emit(this.displayedData);
    } else {
      window.alert(`Wybierz opcję z bloku pierwszego.`);
      return;
    }
  }

  fetchData(): void {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      this.completeData = JSON.parse(storedData);
    } else {
      window.alert(
        'Błąd: nie znaleziono danych w localStorage. Odświeżanie strony.'
      );
      window.location.reload();
    }
  }

  replaceData(): void {
    this.displayedData = [];
    if (Number(this.radioSelection) === 3) {
      this.pushRandomData();
    } else {
      this.pushData();
    }
  }

  addData(): void {
    if (this.displayedData.length === this.completeData.length) {
      window.alert('Wszystkie elementy zostały już wyświetlone.');
      return;
    }

    if (Number(this.radioSelection) === 3) {
      this.pushRandomData();
    } else {
      this.pushData();
    }
  }

  pushData(): void {
    const item = this.completeData.find(
      (item) => item.id === Number(this.radioSelection)
    );
    if (item) {
      const isItemAlreadyAdded = this.displayedData.some(
        (existingItem) => existingItem.id === item.id
      );
      if (!isItemAlreadyAdded) {
        this.displayedData.push(item);
      } else {
        window.alert(`Wybrany element został już dodany. Wybierz inny.`);
      }
    } else {
      window.alert(`Nie znaleziono elementu o ID ${this.radioSelection}.`);
    }
  }

  pushRandomData(): void {
    const notDisplayedIds = this.completeData
      .filter(
        (item) =>
          !this.displayedData.some(
            (displayedItem) => displayedItem.id === item.id
          )
      )
      .map((item) => item.id);
    if (notDisplayedIds.length > 0) {
      const randomId =
        notDisplayedIds[Math.floor(Math.random() * notDisplayedIds.length)];
      const item = this.completeData.find((item) => item.id === randomId);
      if (item) {
        const isItemAlreadyAdded = this.displayedData.some(
          (existingItem) => existingItem.id === item.id
        );
        if (!isItemAlreadyAdded) {
          this.displayedData.push(item);
        } else {
          window.alert(`Wyprany element został już dodany. Wybierz inny.`);
        }
      }
    }
  }
}

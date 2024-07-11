import { Component, Input } from '@angular/core';
import { Data } from '../shared/data.model';

@Component({
  selector: 'app-block3',
  templateUrl: './block3.component.html',
  styleUrl: './block3.component.scss',
})
export class Block3Component {
  @Input() data: Data[] = [];
}

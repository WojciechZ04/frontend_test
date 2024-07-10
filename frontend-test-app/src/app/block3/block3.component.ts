import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-block3',
  templateUrl: './block3.component.html',
  styleUrl: './block3.component.scss'
})
export class Block3Component implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      
  }
}

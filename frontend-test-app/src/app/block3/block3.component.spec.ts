import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block3Component } from './block3.component';

describe('Block3Component', () => {
  let component: Block3Component;
  let fixture: ComponentFixture<Block3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Block3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

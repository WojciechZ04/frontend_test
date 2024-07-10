import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2Component } from './block2.component';

describe('Block2Component', () => {
  let component: Block2Component;
  let fixture: ComponentFixture<Block2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Block2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

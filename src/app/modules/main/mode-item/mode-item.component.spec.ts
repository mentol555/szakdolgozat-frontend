import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeItemComponent } from './mode-item.component';

describe('ModeItemComponent', () => {
  let component: ModeItemComponent;
  let fixture: ComponentFixture<ModeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

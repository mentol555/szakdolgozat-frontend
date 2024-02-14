import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEditorComponent } from './img-editor.component';

describe('ImgEditorComponent', () => {
  let component: ImgEditorComponent;
  let fixture: ComponentFixture<ImgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

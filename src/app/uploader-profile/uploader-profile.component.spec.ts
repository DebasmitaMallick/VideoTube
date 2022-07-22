import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderProfileComponent } from './uploader-profile.component';

describe('UploaderProfileComponent', () => {
  let component: UploaderProfileComponent;
  let fixture: ComponentFixture<UploaderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaderProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

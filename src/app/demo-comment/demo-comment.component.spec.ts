import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCommentComponent } from './demo-comment.component';

describe('DemoCommentComponent', () => {
  let component: DemoCommentComponent;
  let fixture: ComponentFixture<DemoCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

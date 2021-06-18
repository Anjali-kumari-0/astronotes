import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecomponentComponent } from './notecomponent.component';

describe('NotecomponentComponent', () => {
  let component: NotecomponentComponent;
  let fixture: ComponentFixture<NotecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

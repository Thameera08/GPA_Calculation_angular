import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetlistComponent } from './studetlist.component';

describe('StudetlistComponent', () => {
  let component: StudetlistComponent;
  let fixture: ComponentFixture<StudetlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudetlistComponent]
    });
    fixture = TestBed.createComponent(StudetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

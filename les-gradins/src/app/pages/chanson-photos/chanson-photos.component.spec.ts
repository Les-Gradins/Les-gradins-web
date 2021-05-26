import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonPhotosComponent } from './chanson-photos.component';

describe('ChansonPhotosComponent', () => {
  let component: ChansonPhotosComponent;
  let fixture: ComponentFixture<ChansonPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChansonPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChansonPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

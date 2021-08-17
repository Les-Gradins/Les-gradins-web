import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundbarsComponent } from './soundbars.component';

describe('SoundbarsComponent', () => {
  let component: SoundbarsComponent;
  let fixture: ComponentFixture<SoundbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitreComponent } from './page-titre.component';

describe('PageTitreComponent', () => {
  let component: PageTitreComponent;
  let fixture: ComponentFixture<PageTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSaisonsComponent } from './menu-saisons.component';

describe('MenuSaisonsComponent', () => {
  let component: MenuSaisonsComponent;
  let fixture: ComponentFixture<MenuSaisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSaisonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

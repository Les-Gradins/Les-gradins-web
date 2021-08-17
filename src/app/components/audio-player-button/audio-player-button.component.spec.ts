import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerButtonComponent } from './audio-player-button.component';

describe('AudioPlayerButtonComponent', () => {
  let component: AudioPlayerButtonComponent;
  let fixture: ComponentFixture<AudioPlayerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

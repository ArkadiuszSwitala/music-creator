import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPlayerTimelineComponent } from './as-player-timeline.component';

describe('AsPlayerTimelineComponent', () => {
  let component: AsPlayerTimelineComponent;
  let fixture: ComponentFixture<AsPlayerTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsPlayerTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsPlayerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

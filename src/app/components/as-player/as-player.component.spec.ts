import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPlayerComponent } from './as-player.component';

describe('AsPlayerComponent', () => {
  let component: AsPlayerComponent;
  let fixture: ComponentFixture<AsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesCardComponent } from './votes-card.component';

describe('VotesCardComponent', () => {
  let component: VotesCardComponent;
  let fixture: ComponentFixture<VotesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

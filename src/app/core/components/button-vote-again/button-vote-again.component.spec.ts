import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVoteAgainComponent } from './button-vote-again.component';

describe('ButtonVoteAgainComponent', () => {
  let component: ButtonVoteAgainComponent;
  let fixture: ComponentFixture<ButtonVoteAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVoteAgainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonVoteAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-vote-again',
  standalone: true,
  imports: [],
  templateUrl: './button-vote-again.component.html',
  styleUrl: './button-vote-again.component.scss'
})
export class ButtonVoteAgainComponent {

  @Output() voteAgain = new EventEmitter<string>()

  voteEmitter(){
    this.voteAgain.emit('new')
  }
}

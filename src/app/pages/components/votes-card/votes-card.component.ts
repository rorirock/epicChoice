import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonsComponent } from '../../../core/components/buttons/buttons.component';
import { ButtonVoteAgainComponent } from '../../../core/components/button-vote-again/button-vote-again.component';

@Component({
  selector: 'app-votes-card',
  standalone: true,
  imports: [ButtonsComponent,ButtonVoteAgainComponent],
  templateUrl: './votes-card.component.html',
  styleUrl: './votes-card.component.scss'
})
export class VotesCardComponent implements OnInit{
 

  voting: boolean = true;

  @Input() name: string =''
  @Input() description: string =''
  @Input() universe: string =''
  @Output() vote = new EventEmitter<{}>()
  img = '../../../../assets/img/'

  ngOnInit(): void {
  }

  eventVote(value:string){
    this.vote.emit({type:value})
    this.voting = false
  }

  newVote(event: string){
    console.log('event::',event)
    this.voting = event === 'new' ? true:false
  }

}

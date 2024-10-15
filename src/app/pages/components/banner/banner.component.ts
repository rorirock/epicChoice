import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ProgressBarComponent } from '../../../core/components/progress-bar/progress-bar.component';
import { VotesCardComponent } from '../votes-card/votes-card.component';
import { Hero } from '../../../core/model/epicData';
import { EpicService } from '../../../core/services/epicService.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ProgressBarComponent, VotesCardComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})

export class BannerComponent {

  @Input() heroe!: Hero
  @Output() heroeEvent = new EventEmitter<Hero>()

  constructor(private serviceEpic: EpicService){}

  like(){
    this.heroe.votes.like++
  }

  dontLike(){
    this.heroe.votes.notLike++
  }

  sendHeroe(){
    this.heroeEvent.emit(this.heroe)
  }

  votes(event:any){
    console.log('event',event)
    if(event.type === 'like'){
      this.like()
    }else{
      this.dontLike()
    }
    this.sendHeroe()
  }

}

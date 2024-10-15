import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../core/model/epicData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() heroe!: Hero

  @Output() heroeEvent = new EventEmitter<number>()

  selectHeroe(id: number){
    this.heroeEvent.emit(id)
  }

}

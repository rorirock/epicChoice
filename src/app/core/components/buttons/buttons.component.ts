import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  likeIcon = faThumbsUp

  @Input() type:string ='' //like or dislike
  @Output() outType = new EventEmitter<string>()


  eventEmitter(){
    this.outType.emit(this.type)
  }

}

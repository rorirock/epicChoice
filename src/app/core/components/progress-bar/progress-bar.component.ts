import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnChanges, OnInit {
 
  @Input() likes: number = 0
  @Input() dislikes: number = 0

  percentageL = 0
  percentageD = 0
  ngOnChanges(changes: SimpleChanges): void {
    this.calculate()
  }

  ngOnInit(): void {
    this.percentageL = 50
    this.percentageD = 50
  }
  

  calculate(){
    const total = this.likes + this.dislikes;
    this.percentageL = Math.round((this.likes/ total)*100)
    this.percentageD = Math.round((this.dislikes/ total)*100)
  }
 


}

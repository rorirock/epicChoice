import { Component, OnInit } from '@angular/core';
import { EpicService } from '../../core/services/epicService.service';
import { Hero, heroes } from '../../core/model/epicData';
import { BannerComponent } from '../components/banner/banner.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  epicData!: Hero[]

  heroe!: Hero

  likes: number = 0
  disLike: number = 0

  constructor(private serviceEpic: EpicService){}
  ngOnInit(): void {
    const dataOld = this.serviceEpic.getData();
    console.log('dataOld',dataOld)
    if(dataOld?.length > 0){
      this.serviceEpic.setData(dataOld)
      this.epicData = dataOld
    }else{
      this.serviceEpic.setData(heroes)
      this.epicData = this.serviceEpic.getData();
    }
    this.heroe = this.epicData[0]
  }

  saveData(heroe: any){
    this.epicData.forEach((hero, index)=>{
      if(hero.id === heroe.id){
        this.epicData[index] = heroe
      }
    })
    this.serviceEpic.updateData(this.epicData)
  }

  newChoice(id: number){
    this.epicData.forEach(hero =>{
      if(hero.id === id){
        this.heroe = hero
      }
    })
  }

}

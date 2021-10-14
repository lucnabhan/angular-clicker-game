import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../_models/building';
import { GameInstance } from '../_models/gameInstance';

@Component({
  selector: 'app-buildings-area',
  templateUrl: './buildings-area.component.html',
  styleUrls: ['./buildings-area.component.css']
})
export class BuildingsAreaComponent implements OnInit {
  @Input() gameInstance: GameInstance;

  constructor() { }

  ngOnInit(): void {
    
  }
  onBought(building: Building){
    building.quantity ++;
    this.gameInstance.elementsCount -= building.price;
    this.gameInstance.perSecond += Math.round((building.perSecond + Number.EPSILON) * 100) / 100;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ["Hulk", "Thor", "Batman", "Spiderman", "IronMan"];
  heroeBorrado: string = "";

  deleteHeroe() { 
    this.heroeBorrado = this.heroes.shift() || "";
  }
}

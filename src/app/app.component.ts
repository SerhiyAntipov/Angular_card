import { Component } from '@angular/core';

export interface newCardInterface {
  title:string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  toggle: boolean = true

  newCards: newCardInterface[] = [
    { title: 'card One', text: 'card one description, card one description, card one description' },
    { title: 'card Two', text: 'card two description, card two description, card two description' },
    { title: 'card Three', text: 'card three description, card two description, card two description' }
  ]

  toggleCards(){
    this.toggle = !this.toggle
  }
}

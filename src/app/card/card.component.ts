import {Component, Input, OnInit} from "@angular/core";
import {newCardInterface} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {

  @Input() dataCard: newCardInterface
  @Input() cardIndex: number

  title = 'My Title';
  text = 'My sample text';
  number = 42
  array = [1,2,3,4,5]
  object = {
    name: 'Serhiy',
    info: {
      age: 16,
      job: 'Front-end Developer'
    }
  }
  imgUrl:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
  img2Url:string = 'https://miro.medium.com/max/512/0*3BrqggZ8xmuaAnu7.png'
  disableHandler:boolean = false
  textColor: string

  cardDate: Date = new Date()

  getInfo(): string{

    return 'getInfo()'
  }

  ngOnInit(): void {

    setTimeout( () => {
      this.imgUrl = this.img2Url
      this.disableHandler = true
    }, 3000)

  }

   changeTitle(){
      this.dataCard.title = 'Title Changed'
   }

  inputHandler(event: any){
    console.log(event)
    const value = event.target.value
    this.dataCard.title = value
  }

  inputHandler2(value:string){
    this.dataCard.title = value
  }

  inputHandler3(){
    console.log(this.title)
  }

}

// @Component({
//   selector: 'app-card',
//   template:
//   `
//     <div class="card">
//
//       <h2>Card Component html</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae commodi dolorum ea, harum magnam minus nihil omnis reiciendis sequi?</p>
//     </div>
//   `,
//   styles:[
//   `
//     .card {
//       padding: .5rem 1rem;
//       border: 1px dashed #ccc;
//       margin-bottom: 1rem;
//     }
//     h2{
//       margin-bottom: .5rem;
//     }
//     `
//   ]
// })

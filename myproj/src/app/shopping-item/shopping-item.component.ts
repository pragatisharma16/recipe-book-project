import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  showImg: boolean = true;
  // @Input() showMeImage: boolean;

  constructor() { }

  ngOnInit() {
  }
onImageClicked(){
  alert('jkjjkhuio');
   this.showImg = !this.showImg;
}
}

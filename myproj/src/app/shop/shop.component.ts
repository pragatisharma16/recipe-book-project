import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
 @Input() showMePartially: boolean;
 @Output() image = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
openImage(){
this.image.emit();
}
}

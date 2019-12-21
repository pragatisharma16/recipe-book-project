import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit {
  @Input() showMeImage: boolean;

  constructor() { }

  ngOnInit() {
  }

}

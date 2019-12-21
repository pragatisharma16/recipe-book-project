import { Component, OnInit, Input, OnChanges,OnDestroy, SimpleChanges, 
  AfterViewInit,DoCheck ,AfterContentInit, AfterContentChecked,AfterViewChecked,
   ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-content',
  templateUrl: './server-content.component.html',
  styleUrls: ['./server-content.component.scss']
})
export class ServerContentComponent implements OnDestroy,AfterViewInit,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked {
@Input('srvElement') element:{
  type:string,
  name:string,
  content:string
};
@ViewChild('heading', { static: true }) heading:ElementRef;
@ContentChild('content',{static:true}) content:ElementRef;
@Input() name:string;
  constructor() {
    console.log('constructor called');
   }
   ngOnChanges(changes : SimpleChanges){
     console.log('ngOnChanges called');
   }
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called');
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called'); 
}
  ngOnInit() {
    console.log('ngOnInit called');
    
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('txt content:'+this.content.nativeElement.textContent);


  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('txt content:'+this.heading.nativeElement.textContent);

  }

}

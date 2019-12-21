import { Component, OnInit,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
@Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = "";
  // newServerContent = "";
@ViewChild('serverNameInput', { static: true }) serverNameInput:ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  addServer(serverInput:HTMLInputElement){
   this.serverCreated.emit({
      serverName : this.serverNameInput.nativeElement.value,
      serverContent:serverInput.value,
    });
  }
  addServerComp(serverInput:HTMLInputElement){
     this.blueprintCreated.emit({
      serverName : this.serverNameInput.nativeElement.value,
      serverContent:serverInput.value,
    });
  }



}

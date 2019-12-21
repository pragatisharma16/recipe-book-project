import { Component, Output } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Pragati',content:'test server'}];

   onServerAdded(serverData : {serverName:string,serverContent:string}){
    this.serverElements.push({
      type : 'server',
      name : serverData.serverName,
      content : serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type : 'blueprint',
      name : blueprintData.serverName,
      content : blueprintData.serverContent
    });
  }
  onChange(){
    this.serverElements[0].name="changed";
  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }

  // servers =  [];
  // onAddServer(){
  //   console.log('hii');
  // this.servers.push('Add Server');
  // }
  // onRemoveServer(id:number){
  //   console.log('helloooo');
    
  //   const position = id + 1;
  //   this.servers.splice(position,1);
  // }
}

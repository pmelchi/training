import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewserver = false;
  serverCreationStatus = 'Nothing was added';
  serverName: string = 'Initial value';

  constructor() {
    setTimeout(() =>  {
      this.allowNewserver = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was added: ' + this.serverName;
  }

  onServerInput(event : Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
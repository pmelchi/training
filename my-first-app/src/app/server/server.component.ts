import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverName: string = "Ghost";
    serverStatus: string = "green";
    serverId: number = 10;

    constructor() {
        setTimeout(()=> {
            this.serverId++;
        }, 2000)
    }

    getServerName() {
        return this.serverName; 
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowServer: boolean = false;
	serverNumber: number = 0;
	serverName: string = '';
	serverArray: Array<string> = ['Test server 1'];

	addServer(){
		this.serverNumber++;
		this.serverArray.push(this.serverName);
	}

	changeBtnPermission(): void {
		this.allowServer = !this.allowServer;
	}

	updateServerName(event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}

  constructor() {
	}

  ngOnInit() {
		setTimeout(() => {
			this.allowServer = !this.allowServer;
		}, 3000)
  }

}

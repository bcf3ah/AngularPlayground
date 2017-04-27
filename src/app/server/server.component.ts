import {Component} from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
		`]
})

export class ServerComponent {
	ID: number = 42;
	serverStatus: string = Math.random() > .5 ? 'online' : 'offline';

	getServerStatus(){ //class methods have same syntax as React class components!
		return this.serverStatus;
	}

	getColor(){
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
};

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-tomorrow',
	templateUrl: 'tomorrow.component.html'
})
export class TomorrowComponent implements OnInit {
	//public todos: any[] = null;
	public todos!: any[] | null;

	constructor(
		private service: DataService,
		private afAuth: AngularFireAuth,
	) { }

	ngOnInit(): void {
		this.afAuth.idToken.subscribe(token => {
			this.service.getTomorrowTodos(token).subscribe((data: any) => this.todos = data);
		});
	}

}

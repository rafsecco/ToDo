import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

	constructor(
		private afAuth: AngularFireAuth,
		private router: Router,
	) {
	}

	ngOnInit(): void {
		this.afAuth.onAuthStateChanged(data => {
			if (data) {
				this.router.navigateByUrl('/');
			} else {
				this.router.navigateByUrl('/login');
			}
		});

		this.afAuth.idToken.subscribe(token => console.log(token));
		//this.afAuth.idToken.subscribe();
	}
}
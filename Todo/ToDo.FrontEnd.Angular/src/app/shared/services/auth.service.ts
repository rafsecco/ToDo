import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../services/user';

@Injectable({
	providedIn: 'root',
})

export class AuthService {

	userData: any; // Save logged in user data

	constructor(
		public afs: AngularFirestore,
		public afAuth: AngularFireAuth,
		public ngZone: NgZone,
		public router: Router
	) {
		// Saving user data in localstorage when
		// logged in and setting up null when logged out
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user')!);
			} else {
				localStorage.setItem('user', 'null');
				JSON.parse(localStorage.getItem('user')!);
			}
		});
	}

	// Returns true when user is looged in and email is verified
	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user')!);
		return user !== null && user.emailVerified !== false ? true : false;
	}

	SetUserData(user: any) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified
		};
		return userRef.set(userData, { merge: true });
	}

	SignOut() {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem('user');
			this.router.navigate(['login']);
		})
	}

	GoogleAuth() {
		return this.AuthLogin(new auth.GoogleAuthProvider());
		// return this.AuthLogin(new auth.GoogleAuthProvider()).then((result: any) => {
		// 	this.router.navigate(['dashboard']);
		// });
	}

	// Auth logic to run auth providers
	AuthLogin(provider: any) {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				console.log('You have been successfully logged in!');
				console.log(result.user);
				this.SetUserData(result.user);
				this.router.navigate(['all']);
			})
			.catch((error) => {
				console.log(error);
				window.alert(error);
			});
	}
}
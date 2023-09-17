import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
	// apiKey: "AIzaSyDvyDCmNPu6IiBwYJi-emfQEdiJ2neDZwQ",
	// authDomain: "rstodo-8ff79.firebaseapp.com",
	// projectId: "rstodo-8ff79",
	// storageBucket: "rstodo-8ff79.appspot.com",
	// messagingSenderId: "180893910652",
	// appId: "1:180893910652:web:67e1d4d8c5a8e27198ebf9"
	apiKey: "AIzaSyA-mels2oootOgABy9hvrcs0AHcauiAuO4",
	authDomain: "rstodo-ffd13.firebaseapp.com",
	projectId: "rstodo-ffd13",
	storageBucket: "rstodo-ffd13.appspot.com",
	messagingSenderId: "1065046955216",
	appId: "1:1065046955216:web:dfe0cbb59f2029d8d77ad5"
};

const app = initializeApp(firebaseConfig);


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	constructor(
		private afAuth: AngularFireAuth,
	) { }

	ngOnInit(): void { }

	login() {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential!.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				console.log(`token: ${token} | user: ${user}`)
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(`errorCode: ${errorCode} | errorMessage: ${errorMessage} | email: ${email} | credential: ${credential}`)
			});
	}
}

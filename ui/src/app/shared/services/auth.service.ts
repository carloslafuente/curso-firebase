import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public auth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
  ) {}

  // Sign up with email/password
  SignUp(email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        this.router.navigate(['']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}

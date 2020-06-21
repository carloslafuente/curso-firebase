import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-auth',
  template: `
    <app-sign-up></app-sign-up>
  `,
})
export class AuthComponent {
  constructor(public auth: AngularFireAuth) {}
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}

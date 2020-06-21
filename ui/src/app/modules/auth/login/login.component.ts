import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      console.log(user);
    });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
}

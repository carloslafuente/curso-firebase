import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ADMIN } from 'src/config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  adminUser: string = ADMIN;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AngularFireAuth
  ) {}

  ngOnInit() {
    // this.auth.user.subscribe((user) => {
    //   console.log(user);
    // });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}

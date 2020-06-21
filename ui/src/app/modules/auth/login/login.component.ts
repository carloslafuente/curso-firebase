import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public auth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.auth.user.subscribe((user) => {
    //   console.log(user);
    // });
  }

  login() {
    this.authService.SignIn(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }

  async loginGoogle() {
    const result = await this.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
    if (result) {
      this.router.navigate([''])
    }
  }
}

import { Profile } from './../profile';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private messages: String[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    this.messages = [];
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    if (!email) {
      this.messages.push('Bitte E-Mail eingeben.');
    }
    if (!password) {
      this.messages.push('Bitte Passwort eingeben.');
    }
    if (this.hasMessages()) {
      return;
    }

    this.authService.login(email, password);

    if (this.authService.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  hasMessages(): boolean {
    return this.messages.length > 0;
  }
}

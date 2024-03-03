import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  isLogin = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authenticationService.login();
    console.log('Eingeloggt');
    this.router.navigateByUrl('/locations/search');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      //Request an Server senden zum Anmelden
    } else {
      //Request an Server senden zum Registrieren
    }
  }

  onSwitch() {
    this.isLogin = !this.isLogin;
  }
}

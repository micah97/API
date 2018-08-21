import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'api-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login() {
    const redirect = `${window.location.protocol}//${window.location.host}/video`;
    (<any>window).location =
   `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&response_type=token&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${redirect}&client_id=123003940899-pvrt8uc91nghv60khqf3v8d5r4ckl25d.apps.googleusercontent.com`;
  }
}

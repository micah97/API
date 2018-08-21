import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
    const redirect = `${window.location.protocol}//${window.location.host}`;
    (<any>window).location = `https://accounts.spotify.com/authorize?client_id=a104952a8f814a5e8c88eaaab6108beb&response_type=token&redirect_uri=${redirect}/spotify`;
  }
}

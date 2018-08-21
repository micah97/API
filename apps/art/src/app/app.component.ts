import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => this.handleAccessToken(fragment))
  }

  handleAccessToken(fragment) {
    if (fragment) {
      this.token = this.route.snapshot.fragment
        .split('access_token=')[1]
        .split('&token')[0];
      localStorage.setItem('accessToken', this.token);
      this.router.navigate(['spotify'], { queryParams: { } })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TacoService } from './taco.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  taco;

  constructor(private tacoService: TacoService) {}

  ngOnInit() {}

  getTaco() {
    this.tacoService.getTaco().subscribe(res => {
      this.taco = res;
      console.log(this.taco, 'TACO');
    });
  }
}

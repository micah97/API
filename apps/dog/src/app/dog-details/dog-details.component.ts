import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  @Input() selectedDog: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  selectedDog;

  @Input() dogs: any;
  @Output() select = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectDog(dog) {
    this.selectedDog = dog;
    this.select.emit(dog);
  }
}

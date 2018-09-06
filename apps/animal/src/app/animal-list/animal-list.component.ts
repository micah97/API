import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  selectedAnimal;

  @Input() animals;
  @Output() select = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectAnimal(animal) {
    this.select.emit(animal);
    this.selectedAnimal = animal;
  }
}

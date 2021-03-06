import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../../shared/core/animal.model';

@Component({
  selector: 'api-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  originalName: string;
  selected: Animal;

  @Input() set selectedAnimal(value: Animal) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  reset() {
    this.group.reset();
    this.selectedAnimal = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(animal) {
    this.reset();
    this.saved.emit(animal);
  }

  delete(animal) {
    this.reset();
    this.deleted.emit(animal);
  }
}

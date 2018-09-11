import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/core/animal.model';
import { AnimalsFacade } from '../shared/state/animals.facade';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  animals$: Observable<Animal[]> = this.animalsFacade.allAnimals$;
  currentAnimal$: Observable<Animal> = this.animalsFacade.currentAnimal$;

  constructor(private fb: FormBuilder,
              private animalsFacade: AnimalsFacade) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentAnimal();
    this.animalsFacade.loadAll();
    this.animalsFacade.mutations$.subscribe(_ => this.resetCurrentAnimal());
  }

  resetCurrentAnimal() {
    this.selectAnimal({id: null});
  }

  selectAnimal(animal) {
    this.animalsFacade.selectAnimal(animal.id);
    this.form.patchValue(animal);
  }

  saveAnimal(animal) {
    if (!animal.id) {
      this.animalsFacade.addAnimal(animal);
    } else {
      this.animalsFacade.updateAnimal(animal);
    }
  }

  deleteAnimal(animal) {
    this.animalsFacade.deleteAnimal(animal);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      mass: [''],
      name: [''],
      height: [''],
      continent: ['']
    });
  }
}

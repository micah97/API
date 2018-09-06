import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnimalService } from './animal.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  animals;
  form: any;
  selectedAnimal;

  constructor(private animalService: AnimalService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.getAnimals();
    this.initForm();
  }

  getAnimals() {
    this.animalService.getanimals().subscribe(res => {
      this.animals = res;
    });
  }

  selectAnimal(animal) {
    this.selectedAnimal = animal;
    this.form.patchValue(this.selectedAnimal);
  }

  cancel() {
    this.selectedAnimal = false;
    this.form.reset();
  }

  save(animal) {
    if (this.form.valid) {
      animal.id ? this.update(animal) : this.create(animal);
    }
  }

  update(animal) {
    this.animalService.update(animal).subscribe(() => {
      this.form.reset();
      this.getAnimals();
      console.log('Sucessful Update');
    });
  }

  create(animal) {
    this.animalService.create(animal).subscribe(() => {
      this.form.reset();
      this.getAnimals();
      console.log('Sucessful Create');
    });
  }

  delete(animal) {
    this.animalService.delete(animal).subscribe(() => {
      this.form.reset();
      this.getAnimals();
      console.log('Successful Delete');
    });
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

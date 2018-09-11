import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/core/fruit.model';
import { FruitsFacade } from '../shared/state/fruit.facade';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  fruits$: Observable<Fruit[]> = this.fruitsFacade.allFruits$;
  currentFruit$: Observable<Fruit> = this.fruitsFacade.currentFruit$;

  constructor(private fb: FormBuilder,
              private fruitsFacade: FruitsFacade) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentFruit();
    this.fruitsFacade.loadAll();
    this.fruitsFacade.mutations$.subscribe(_ => this.resetCurrentFruit());
  }

  resetCurrentFruit() {
    this.selectFruit({id: null});
  }

  selectFruit(fruit) {
    this.form.patchValue(fruit);
    this.fruitsFacade.selectFruit(fruit.id);
  }

  saveFruit(fruit) {
    if (!fruit.id) {
      this.fruitsFacade.addFruit(fruit);
    } else {
      this.fruitsFacade.updateFruit(fruit);
    }
  }

  deleteFruit(fruit) {
    this.fruitsFacade.deleteFruit(fruit);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      sugar: [''],
      calories: [''],
      carbohydrates: ['']
    })
  }
}

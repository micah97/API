import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Taco } from '../shared/core/taco.model';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/core/pizza.model';
import { TacosFacade } from '../shared/state/tacos.facade';
import { PizzasFacade } from '../shared/state/pizzas.facade';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  tacoForm: any;
  selectedPizza: Pizza;

  pizzas$: Observable<Pizza[]> = this.pizzasFacade.allPizzas$;
  currentPizza$: Observable<Pizza> = this.pizzasFacade.currentPizza$;

  tacos$: Observable<Taco[]> = this.tacosFacade.allTacos$;
  currentTaco$: Observable<Taco> = this.tacosFacade.currentTaco$;

  constructor(private pizzasFacade: PizzasFacade,
              private tacosFacade: TacosFacade,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentPizza();
    this.pizzasFacade.loadAll();
    this.pizzasFacade.mutations$.subscribe(_ => this.resetCurrentPizza());
    this.resetCurrentTaco();
    this.tacosFacade.loadAll();
    this.tacosFacade.mutations$.subscribe(_ => this.resetCurrentTaco());
  }

  resetCurrentPizza() {
    this.selectedPizza = { } as any;
    this.selectPizza({id: null});
  }

  selectPizza(pizza) {
    this.pizzasFacade.selectPizza(pizza.id);
    this.form.patchValue(pizza);
  }

  savePizza(pizza) {
    if (!pizza.id) {
      this.pizzasFacade.addPizza(pizza);
    } else {
      this.pizzasFacade.updatePizza(pizza);
      console.log(pizza, 'UPDATING');
    }
  }

  deletePizza(pizza) {
    this.pizzasFacade.deletePizza(pizza);
  }

  // START TACO CRUD
  resetCurrentTaco() {
    this.selectTaco({id: null});
  }

  selectTaco(taco) {
    this.tacosFacade.selectTaco(taco.id);
    this.tacoForm.patchValue(taco);
  }

  saveTaco(taco) {
    if (!taco.id) {
      this.tacosFacade.addTaco(taco);
    } else {
      this.tacosFacade.updateTaco(taco);
    }
  }

  deleteTaco(taco) {
    this.tacosFacade.deleteTaco(taco);
  }
  // END TACO CRUD

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      calories: [''],
      mainTopping: [''],
      secondaryTopping: ['']
    });

    this.tacoForm = this.fb.group({
      id: [''],
      name: [''],
      salsa: [''],
      protein: [''],
      calories: ['']
    })
  }
}

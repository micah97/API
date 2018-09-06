import { ShoesFacade } from './../shared/state/shoes.facade';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Shoe } from '../shared/core/shoe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  shoes$: Observable<Shoe[]> = this.shoesFacade.allShoes$;
  currentShoe$: Observable<Shoe> = this.shoesFacade.currentShoe$;

  constructor(private fb: FormBuilder,
              private shoesFacade: ShoesFacade) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentShoe();
    this.shoesFacade.loadAll();
    this.shoesFacade.mutations$.subscribe(_ => this.resetCurrentShoe());
  }

  resetCurrentShoe() {
    this.selectShoe({id: null});
  }

  selectShoe(shoe) {
    this.shoesFacade.selectShoe(shoe.id);
    this.form.patchValue(shoe);
  }

  saveShoe(shoe) {
    if (!shoe.id) {
      this.shoesFacade.addShoe(shoe);
    } else {
      this.shoesFacade.updateShoe(shoe);
    }
  }

  deleteShoe(shoe) {
    this.shoesFacade.deleteShoe(shoe);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      maker: [''],
      price: [''],
      release: ['']
    });
  }
}

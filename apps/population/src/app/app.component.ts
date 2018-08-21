import { Component, OnInit } from '@angular/core';
import { PopulationService } from "./population.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countries: any;
  selectedCountry: any;
  form: FormGroup;

  constructor(private populationService: PopulationService,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getPopulation();
    this.initForm();
  }

  getPopulation() {
    this.populationService.getPopulation()
      .subscribe(res => {
        this.countries = res;
      })
  }

  selectCountry(country) {
    this.selectedCountry = country;
  }

  reset() {
    this.form.reset();
    this.selectedCountry = { } as any;
  }

  initForm() {
    this.form = this.fb.group({
      females: [''],
      males: [''],
      total: ['']
    });
  }
}

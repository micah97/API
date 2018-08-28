import { Component, OnInit } from '@angular/core';
import { RocketService } from "./rocket.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rockets: any;
  selectedRocket: any;
  form: FormGroup;

  constructor(private rocketService: RocketService,
              private fb: FormBuilder) { }

  ngOnInit() {
   this.getRockets();
   this.initForm();
  }

  getRockets() {
    this.rocketService.getRockets()
      .subscribe(res => {
        this.rockets = res;
      })
  }

  selectRocket(rocket) {
    this.selectedRocket = rocket;
  }

  resetForm() {
    this.form.reset();
    this.selectedRocket = false;
  }

  initForm() {
    this.form = this.fb.group( {
      name: [''],
      country: [''],
      company: [''],
      height: [''],
      mass: [''],
      diameter: [''],
      cost_per_launch: [''],
      success_rate_pct: ['']
    });
  }
}

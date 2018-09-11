import { InstrumentsFacade } from '../shared/state/instruments.facade';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Instrument } from '../shared/core/instrument.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  instruments$: Observable<Instrument[]> = this.instrumentsFacade.allInstruments$;
  currentInstrument$: Observable<Instrument> = this.instrumentsFacade.currentInstrument$;

  constructor(private fb: FormBuilder,
              private instrumentsFacade: InstrumentsFacade) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentInstrument();
    this.instrumentsFacade.loadAll();
    this.instrumentsFacade.mutations$.subscribe(_ => this.resetCurrentInstrument());
  }

  resetCurrentInstrument() {
    this.selectInstrument({id: null});
  }

  selectInstrument(instrument) {
    console.log(instrument, 'INSTRUMENT');
    this.form.patchValue(instrument);
    this.instrumentsFacade.selectInstrument(instrument.id);
  }

  saveInstrument(instrument) {
    if (!instrument.id) {
      this.instrumentsFacade.addInstrument(instrument);
    } else {
      this.instrumentsFacade.updateInstrument(instrument);
    }
  }

  deleteInstrument(instrument) {
    this.instrumentsFacade.deleteInstrument(instrument);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      year: [''],
      country: [''],
      inventor: ['']
    });
  }
}

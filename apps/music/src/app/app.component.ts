import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { UPDATE } from '@ngrx/store';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  instruments: any;
  selectedInst: any;

  form: FormGroup;

  constructor(private musicService: MusicService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.getInstruments();
  }

  getInstruments() {
    this.musicService.getInstruments().subscribe(res => {
      this.instruments = res;
    });
  }

  selectInst(inst) {
    this.selectedInst = inst;
    this.form.patchValue(this.selectedInst);
  }

  cancel() {
    this.selectedInst = false;
    this.form.reset();
  }

  save(inst) {
    console.log(inst);
    if (this.form.valid) {
      inst.id ? this.update(inst) : this.create(inst);
    }
  }

  delete(inst) {
    this.musicService.delete(inst).subscribe(() => {
      this.form.reset();
      this.getInstruments();
      console.log('Sucessful Delete');
    });
  }

  update(inst) {
    this.musicService.update(inst).subscribe(() => {
      this.form.reset();
      this.getInstruments();
      console.log('Sucessful Update');
    });
  }

  create(inst) {
    this.musicService.create(inst).subscribe(() => {
      this.form.reset();
      this.getInstruments();
      console.log('Sucessful Create');
    });
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

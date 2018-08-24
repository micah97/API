import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  selectedInst;

  @Input() instruments: any;
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitInstrument(inst) {
    this.selectedInst = inst;
    this.selected.emit(inst);
  }
}

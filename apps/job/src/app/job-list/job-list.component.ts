import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  selectedJob;

  @Input() jobs: any;
  @Output() selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitJob(job) {
    this.selectedJob = job;
    this.selected.emit(job);
  }
}

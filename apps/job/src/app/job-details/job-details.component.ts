import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  @Input() selectedJob: any;
  @Input() relatedJobs: any;
  @Output() deselected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  deselect() {
    this.deselected.emit();
    this.selectedJob = false;
  }
}

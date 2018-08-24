import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs;
  selectedJob;
  relatedJobs;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs()
      .subscribe(res => {
        this.jobs = res;
      })
  }

  selectJob(job) {
    this.selectedJob = job;
    this.jobService.getJobDetails(job.uuid)
      .subscribe((res: any) => {
        this.relatedJobs = res.related_job_titles;
        console.log(this.relatedJobs, 'JOB');
      })
  }

  deselectJob() {
    this.selectedJob = false;
  }
}

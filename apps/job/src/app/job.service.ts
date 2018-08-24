import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = 'http://api.dataatwork.org/v1/jobs/';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(this.url + 'unusual_titles');
  }

  getJobDetails(id) {
    return this.http.get(this.url + id + '/related_jobs')
  }
}

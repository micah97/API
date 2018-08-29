import { DogService } from './dog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dogs;
  selectedDog;

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getDogs()
      .subscribe(res => {
        this.dogs = res;
      })
  }

  selectDog(dog) {
    this.dogService.getDog(dog.id)
      .subscribe(res => {
        this.selectedDog = res;
      })
  }
}

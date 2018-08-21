import {Component, OnInit} from '@angular/core';
import {DefinitionService} from "./definition.service";

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DefinitionService]
})
export class AppComponent implements OnInit {
  universities: any;

  constructor(private definitionService: DefinitionService) {}

  ngOnInit() {
  }

  getUniversities(search) {
    this.definitionService.getDefinition(search)
      .subscribe(res => {
        this.universities = res;
      })
  }
}

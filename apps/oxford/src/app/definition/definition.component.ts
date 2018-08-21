import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  @Input() universities: any;

  constructor() { }

  ngOnInit() {
  }

}

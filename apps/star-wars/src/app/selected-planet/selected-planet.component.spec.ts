import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlanetComponent } from './selected-planet.component';

describe('SelectedPlanetComponent', () => {
  let component: SelectedPlanetComponent;
  let fixture: ComponentFixture<SelectedPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoSearchComponent } from './taco-search.component';

describe('TacoSearchComponent', () => {
  let component: TacoSearchComponent;
  let fixture: ComponentFixture<TacoSearchComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TacoSearchComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

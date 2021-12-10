import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneNouvelleStatiqueComponent } from './une-nouvelle-statique.component';

describe('UneNouvelleStatiqueComponent', () => {
  let component: UneNouvelleStatiqueComponent;
  let fixture: ComponentFixture<UneNouvelleStatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneNouvelleStatiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneNouvelleStatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

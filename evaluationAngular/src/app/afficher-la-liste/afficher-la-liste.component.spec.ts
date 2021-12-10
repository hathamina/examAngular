import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLaListeComponent } from './afficher-la-liste.component';

describe('AfficherLaListeComponent', () => {
  let component: AfficherLaListeComponent;
  let fixture: ComponentFixture<AfficherLaListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherLaListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherLaListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

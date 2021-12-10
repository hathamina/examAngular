import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-afficher-la-liste',
  templateUrl: './afficher-la-liste.component.html',
  styleUrls: ['./afficher-la-liste.component.css'],
})
export class AfficherLaListeComponent implements OnInit {
  public tabStatistique: Statistique[] = [];
  @Input() statistique!: Statistique;
  suppression: any;
  constructor() {}
  reagirAuClick() {
    this.suppression.emit();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.services';

@Component({
  selector: 'app-afficher-la-liste',
  templateUrl: './afficher-la-liste.component.html',
  styleUrls: ['./afficher-la-liste.component.css'],
})
export class AfficherLaListeComponent implements OnInit {
  public tabStatique: Statistique[] = [];
  constructor() {}

  ngOnInit(): void {}

  supprimerStatistique(statistique: Statistique) {
    let index = this.tabStatique.indexOf(statistique);
    if (index != -1) {
      this.tabStatique.splice(index, 1);
    }
  }
}

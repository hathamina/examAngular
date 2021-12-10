import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Statistique } from '../models/statistique';

import { StatistiqueService } from '../services/statistique.services';

@Component({
  selector: 'app-une-nouvelle-statique',
  templateUrl: './une-nouvelle-statique.component.html',
  styleUrls: ['./une-nouvelle-statique.component.css'],
})
export class UneNouvelleStatiqueComponent implements OnInit {
  public identifiant!: string;
  public titre!: string;
  public valeur!: string;
  creerStat: any;

  constructor(
    private singletonStat: StatistiqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  validerForm() {
    this.creerStat;
  }
  creerFilm() {
    let nouvelleStat = new Statistique(
      this.identifiant,
      this.titre,
      this.valeur
    );
    this.singletonStat.tabStatique.push(nouvelleStat);
  }
}

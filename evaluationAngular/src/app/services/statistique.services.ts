import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public tabStatique: Statistique[] = [];

  constructor() {
    this.tabStatique = [
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
        'Démographie en France',
        '60M'
      ),
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
        'Démographie en France',
        '60M'
      ),
      new Statistique(
        'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
        'Démographie en France',
        '60M'
      ),
    ];
    setTimeout(() => {
      let NewStat = new Statistique(
        'kfsdhffdflk-dfsdf-88997',
        'démographie en France',
        '67M'
      );
      this.tabStatique.push(NewStat);
    }, 2000);
  }
}

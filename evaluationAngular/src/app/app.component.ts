import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'evaluationAngular';

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
    ];
  }
}

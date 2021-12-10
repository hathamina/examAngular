import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './services/statistique.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'evaluationAngular';

  public tabStatique: Statistique[];

  constructor(public singletonStat: StatistiqueService) {
    this.tabStatique = this.singletonStat.tabStatique;
  }

  supprimerStatistique(statistique: Statistique) {
    let index = this.tabStatique.indexOf(statistique);
    if (index != -1) {
      this.tabStatique.splice(index, 1);
    }
  }
}

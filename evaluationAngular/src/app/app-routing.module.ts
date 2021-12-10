import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherLaListeComponent } from './afficher-la-liste/afficher-la-liste.component';
import { UneNouvelleStatiqueComponent } from './une-nouvelle-statistique/une-nouvelle-statique.component';

const routes: Routes = [
  { path: 'AfficherLaListe', component: AfficherLaListeComponent },
  { path: 'UneNouvelleStatistique', component: UneNouvelleStatiqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

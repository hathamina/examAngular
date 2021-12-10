import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AfficherLaListeComponent } from './afficher-la-liste/afficher-la-liste.component';
import { UneNouvelleStatiqueComponent } from './une-nouvelle-statistique/une-nouvelle-statique.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    AfficherLaListeComponent,
    UneNouvelleStatiqueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

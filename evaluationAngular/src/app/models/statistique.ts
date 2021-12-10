export class Statistique {
  public identifiant: string;
  public titre: string;
  public valeur: string;

  constructor(id: string, titre: string, valeur: string) {
    this.identifiant = id;
    this.titre = titre;
    this.valeur = valeur;
  }
}

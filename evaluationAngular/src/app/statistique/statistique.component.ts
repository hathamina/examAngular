import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  @Input() statistique!: Statistique;
  @Output() suppression = new EventEmitter();

  constructor() {}

  reagirAuClick() {
    this.suppression.emit();
  }
  ngOnInit(): void {}
}

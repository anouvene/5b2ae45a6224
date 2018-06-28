import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  /**
   * Entrée de donnée "compteur" du composant parent
   */
  @Input('c') public compteur: number;

  /**
   * Sortie de donnée émis par "emitterResult"
   * @type {EventEmitter<any>} Emetteur d'évènement
   */
  @Output('r') public emitterResult = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  /**
   * Augmenter la valeur du compteur et la faire remonter au composant parent
   */
  incrementerCompteur(): void {
    this.compteur++;
    this.emitterResult.emit(this.compteur);
  }

  /**
   * Diminuer la valeur du compteur et la faire remonter au composant parent
   */
  decrementerCompteur(): void {
    this.compteur--;
    this.emitterResult.emit(this.compteur);
  }

}

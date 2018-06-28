import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  public result: number = 0;

  constructor() { }

  ngOnInit() { }

  /**
   * Recevoir le résultat du compteur émit par le composant enfant
   * @param $resultEmitted
   * @returns {number}
   */
  displayResult($resultEmitted): number {
    return this.result = $resultEmitted;
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('saisie')
  private saisie: ElementRef;

  constructor() { }

  ngOnInit() { }

  afficherSaisie() {
    this.valeur = this.saisie.nativeElement.value;
  }

}

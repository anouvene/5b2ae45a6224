import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-exercice3-enfant-bis',
  templateUrl: './exercice3-enfant-bis.component.html',
  styleUrls: ['./exercice3-enfant-bis.component.css']
})
export class Exercice3EnfantBisComponent implements OnInit, AfterContentInit {

  @ContentChild('refContent')
  private el;
  public content: Node;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    // convert HTML strings to DOM Elements
    const contentParsed = new DOMParser().parseFromString(this.el.nativeElement.innerHTML, 'text/html');
    this.content = contentParsed.body.firstChild;

    // Insert content node in span with id="childContent"
    document.querySelector('#childContent').appendChild(this.content);
  }

}

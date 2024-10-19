import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css', './typescript.component.sections.css'],

  animations: [
    trigger('staggeredAnimation', [
      transition(':enter', [
        query('.animate-me', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('300ms', [
            animate('800ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class TypescriptComponent implements OnInit {
  VantagensIsOpen: boolean = false
  VantagensWidth: string = "30%"
  DesvantagensIsOpen: boolean = false
  DesvantagensWidth: string = "30%"
  constructor() {}

  ngOnInit() {

  }

  VantagensOpen() {
    if(this.VantagensIsOpen === false) {
      this.VantagensIsOpen = true
      this.VantagensWidth = "100%"
    }else {
      this.VantagensIsOpen = false
      this.VantagensWidth = "30%"
    }
  }

  DesvantagensOpen() {
    if(this.DesvantagensIsOpen === false) {
      this.DesvantagensIsOpen = true
      this.DesvantagensWidth = "100%"
    }else {
      this.DesvantagensIsOpen = false
      this.DesvantagensWidth = "30%"
    }
  }

}

import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.cards.css'],

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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

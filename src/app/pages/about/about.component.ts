import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

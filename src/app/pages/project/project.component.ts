import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],

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
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-desvantagens',
  templateUrl: './card-desvantagens.component.html',
  styleUrls: ['./card-desvantagens.component.css']
})
export class CardDesvantagensComponent implements OnInit {
  @Input() title: string = ''
  @Input() desc: string = ''
  @Input() img: string = ''
  @Input() img2: string = ''
  @Input() color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

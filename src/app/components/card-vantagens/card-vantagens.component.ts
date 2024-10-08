import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vantagens',
  templateUrl: './card-vantagens.component.html',
  styleUrls: ['./card-vantagens.component.css']
})
export class CardVantagensComponent implements OnInit {
  @Input() title: string = ''
  @Input() desc: string = ''
  @Input() img: string = ''
  @Input() img2: string = ''
  @Input() color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

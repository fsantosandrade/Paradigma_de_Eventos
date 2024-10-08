import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-time-line',
  templateUrl: './card-time-line.component.html',
  styleUrls: ['./card-time-line.component.css']
})
export class CardTimeLineComponent implements OnInit {
  isOpen:boolean = true 
  width:string = "450px"
  @Input() title:string = ''
  @Input() desc:string = ''
  @Input() img:string = ''
  @Input() imgColor:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    if(this.isOpen) {
      this.isOpen = false
      this.width = "120px"
    }else {
      this.isOpen = true
      this.width = "450px"
    }
  }

}

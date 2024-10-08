import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-time-line-reverse',
  templateUrl: './card-time-line-reverse.component.html',
  styleUrls: ['./card-time-line-reverse.component.css']
})
export class CardTimeLineReverseComponent implements OnInit {
  isOpen:boolean = true 
  width:string = "430px"
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

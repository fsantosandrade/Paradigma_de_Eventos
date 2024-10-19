import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-intro-video',
  templateUrl: './card-intro-video.component.html',
  styleUrls: ['./card-intro-video.component.css']
})
export class CardIntroVideoComponent implements OnInit {
  isOpen: boolean = false
  balaoRotate: string = ''
  balaoIndex: number = 2
  contentRotate: string = 'translateY(-200px) rotateY(180deg)'
  contentIndex: number = 1
  @Input() title: string = ''
  @Input() video: string = ''


  constructor() { }

  ngOnInit(): void {
  }

  rotate() {
    if(!this.isOpen) {
      this.balaoRotate = 'rotateY(90deg)'
      this.contentRotate = 'translateY(-200px) rotateY(270deg)'

      this.balaoIndex = 1
      this.contentIndex = 2

      this.balaoRotate = 'rotateY(180deg)'
      this.contentRotate = 'translateY(-200px) rotateY(360deg)'

      this.isOpen = true
    }else {
      this.balaoRotate = 'rotateY(90deg)'
      this.contentRotate = 'translateY(-200px) rotateY(270deg)'

      this.balaoIndex = 2
      this.contentIndex = 1

      this.balaoRotate = ''
      this.contentRotate = 'translateY(-200px) rotateY(180deg)'

      this.isOpen = false
    }
  }
}

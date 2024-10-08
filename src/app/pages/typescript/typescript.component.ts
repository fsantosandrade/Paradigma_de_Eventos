import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css', './typescript.component.sections.css']
})
export class TypescriptComponent implements OnInit {
  VantagensIsOpen: boolean = false
  VantagensWidth: string = "30%"
  DesvantagensIsOpen: boolean = false
  DesvantagensWidth: string = "30%"

  constructor() { }

  ngOnInit(): void {
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

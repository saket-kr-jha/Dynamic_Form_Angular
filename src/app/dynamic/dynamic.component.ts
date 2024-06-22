import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit {

  @Input() public description : string = "";
  @Output() public clicked = new EventEmitter();

  constructor( ){}

  ngOnInit(): void {
    console.log("Inside dynamic oninit");
  }
  
  handleClick(){
    this.clicked.emit();
  }

}

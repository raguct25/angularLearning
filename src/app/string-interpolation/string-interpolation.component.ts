import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  stingInter: string = 'String interpotaion';
  fine : number = 100;

  constructor() { }

  ngOnInit() {
  }

  getStringInterPolation (){
    return this.fine;
  }

}

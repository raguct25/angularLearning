import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  buttonDisabled = false;

  constructor() {
    setTimeout(()=>{
      this.buttonDisabled = true;
    },9000);
   }

  ngOnInit() {
  }

}

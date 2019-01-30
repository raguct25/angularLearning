import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  eventTrigger = "still EventBinding not called";
  eventName= "ragu";

  constructor() { }

  ngOnInit() {
  }

  showEventText (){
    return this.eventTrigger = 'event binding function called';
  }
  inputEventBinding(event:Event){
    // console.log('input event binding called...', event.target.value);
    this.eventName = (<HTMLInputElement>event.target).value;
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
// import {SampleComponent} from '../sample/sample.component'

@NgModule({
  declarations: [
    TestComponent,
    // SampleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class TestModule { }

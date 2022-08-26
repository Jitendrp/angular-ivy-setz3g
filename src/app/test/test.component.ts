import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 <h2> Hello</h2>
 <input [id]="myid" type="text" value="jithendra">
 <input [disabled]="isdisabled" type="text" value="jithendra">
 <h3 class="text-success">Code Evolution</h3>
 <h4 [style.color] = "'red'">APP</h4>
 
  `,
  styles: [
    `.text-success{
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
    `
  ],
})
export class TestComponent implements OnInit {
  public myid = "testID"
  public isdisabled = "true"
  public successClass = "text-success"
  public hasError = true
 
  constructor() {}

  ngOnInit() {}

  
}

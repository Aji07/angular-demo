import { Component, OnInit, OnDestroy} from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy{
// 'User' variable is used for ngfor loop.
  user : any[] = [{'name' : 'Ajith','contactno':'9629678700'},
                  {'name':'Vijay','contactno':null},
                  {'name':'Ajithkumar M', 'contactno':'1212121212'},
                  {'name':'Gokul','contactno':'1000000011'},
                  {'name': 'Bala', 'contactno': '0000000001'}
                  ];
// 'items' is used for switch staement.
  items:any[]= [
    {'str':'one', val:1},
    {'str':'two', val:2},
    {'str':'three', val:3},
    {'str':'four', val:4}
  ];
  selectedVal:any = null;

  // json parse data
  stringifiedData : any;
  parseJson: any;

  myData = {
    name: "Ajithkumar",
    qualification: "M.C.A",
    technology: "Angular"
  };

  // Boolean to using ngif
  isLoggedIn : boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log("Component Initiated");
    console.log(this.myData);

    this.stringifiedData = JSON.stringify(this.myData);
    console.log("With Stringify: ",this.stringifiedData);

    this.parseJson = JSON.parse(this.stringifiedData);
    console.log("With Json Parse: ", this.parseJson);
  }
 ngOnDestroy(): void {
   console.log("Component Destroyed");
 }
}

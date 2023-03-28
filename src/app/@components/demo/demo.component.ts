import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy{

  user : any[] = [{'name' : 'Ajith','contactno':'9629678700'},
  {'name':'Vijay','contactno':null},
  {'name':'Gokul','contactno':'1000000011'},
  {'name': 'Bala', 'contactno': '0000000001'}];


  items:any[]= [{'str':'one', val:1},{'str':'two', val:2},{'str':'three', val:3},];
  selectedVal:any = 'one';

  isLoggedIn : boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log("Component Initiated")
  }
 ngOnDestroy(): void {
   console.log("Component Destroyed");
 }
}

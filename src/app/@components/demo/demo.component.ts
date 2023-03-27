import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  user : any[] = [{'name' : 'Ajith','contactno':'9629678700'},
  {'name':'Vijay','contactno':'1234567890'},
  {'name':'Gokul','contactno':'1234567890'}];

  isLoggedIn : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

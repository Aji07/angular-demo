import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Data : any;
  public dateToday : any;

  user : any[] = [{'name' : 'Ajith','contactno':'1234567890'},
                  {'name':'Vijay','contactno':'1234567890'},
                  {'name':'Gokul','contactno':'1234567890'}
                  ];

  isLoggedIn : boolean = true;

  constructor() { }

  ngOnInit(): void {
  this.dateToday = new Date().toDateString();
  }
  form = new FormGroup({
    courses: new FormArray([]),
});

get courses(): FormArray {
    return this.form.get('courses') as FormArray;
}

addCourse() {
    this.courses.push(new FormControl());
}

onSubmit() {
    console.log(this.courses.value);
}

}

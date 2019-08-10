import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  entryForm = new FormGroup({
    description: new FormControl(''),
    value: new FormControl('')
  })

  ngOnInit() {
  }

 //formgroup is a collection of form controla where a form control belongs to a field

}

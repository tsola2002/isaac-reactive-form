import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  entryForm: FormGroup;
  

  constructor() { }



  

  ngOnInit(): void {
          //formgroup is a collection of form controls where a form control belongs to a field  
          this.entryForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl(''),
            sendCatalog: new FormControl(true)
    });
  } 

  //use setValue for all formcontrols & use Patch value for some formcontrols
  populateTestData(): void {
    this.entryForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jackwood@torchwood.com',
      sendCatalog: false
    });
  }

 

}

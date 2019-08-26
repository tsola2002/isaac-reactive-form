import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form', 
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  entryForm: FormGroup;
  

  constructor(private fb: FormBuilder) { }



  

  ngOnInit(): void {
           //formbuilder takes in a control configuration object & defines he form controls associated with the form group
           //you can have two options or specify an array
          this.entryForm = this.fb.group({
            firstName:['',[Validators.required, Validators.minLength(3)]],
            lastName:['', [Validators.required, Validators.maxLength(50)]],
            email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            sendCatalog:true
          });

          //formgroup is a collection of form controls where a form control belongs to a field
          //THE OLD WAY OF DOING FORM CONTROL
          // this.entryForm = new FormGroup({
          //   firstName: new FormControl(''),
          //   lastName: new FormControl(''),
          //   email: new FormControl(''),
          //   sendCatalog: new FormControl(true)
          //});
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

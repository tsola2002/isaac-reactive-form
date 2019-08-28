import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


//validator function takes in form control or formgroup with key value return type specified 
function ratingRange(c: AbstractControl): {[key: string]: boolean} | null {
  if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
      return { 'range': true };
  };
  return null;
};


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
            phone: '',
            notification:'email',
            rating:['', ratingRange],
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

  setNotification(notifyVia: string): void{
     //we need a reference to the formcontrol
     //if the notification is via text then we add the validator
     const phoneControl = this.entryForm.get('phone');
     if (notifyVia === 'text') {
       phoneControl.setValidators(Validators.required); 
     } else {
       phoneControl.clearValidators();
     }
     //we need to re-evaluate the forms control state
     phoneControl.updateValueAndValidity();
  }

 

}

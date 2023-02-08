import { Component,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(private FB: FormBuilder) { }   
  
  form: FormGroup;    
  selected: string[] = [];

  ngOnInit() {
    this.form = this.FB.group({
      array: this.FB.array(
        this.values.map(x => this.FB.group({
          label: this.FB.control(x.label)
        }))
      )
    });      
  }

  onSubmit() {
    const formArray: FormArray = this.form.get('array') as FormArray;    
    
    formArray.value.forEach((formGroup: FormGroup, i: number) => {
      this.values[i].boolValue = formGroup['boolValue'];
      this.values[i].label = formGroup['label'];
    });
  }
  
values =  [ 
{
       "id": 14,
       "value": null,
       "label": "Group View",
       "datetime": null,
       "boolValue":true
   },
   {
       "id": 18,
       "value": null,
       "label": "Keep Apps",
       "datetime": null,
       "boolValue":false
   },
   {
       "id": 21,
       "value": null,
       "label": "Pay Entry Restricted",
       "datetime": null,
       "boolValue":true
   },
   {
       "id": 16,
       "value": null,
       "label": "Hide Send Button",
       "datetime": null,
       "boolValue":false
   },
   {
       "id": 22,
       "value": null,
       "label": "Photos Required",
       "datetime": null,
       "boolValue":true
   },
   {
       "id": 24,
       "value": null,
       "label": "Send 1099s",
       "datetime": null,
       "boolValue":true
   },
   {
       "id": 19,
       "value": null,
       "label": "Marketing Rep Commissions",
       "datetime": null,
       "boolValue":true
   },
   {
       "id": 15,
       "value": null,
       "label": "Hide Issue Button",
       "datetime": null,
       "boolValue":true
   }];

}


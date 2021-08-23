import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent {
  form: FormGroup;

  selectedItemsList = [];
  checkedIDs = [];
  emotionSelect = '';

  emotionList = [
    { id: 1, name: 'Happy' },
    { id: 2, name: 'Sad' },
    { id: 3, name: 'Scared' }
  ];



  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      emotion: this.formBuilder.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
   
  }

  onCheckboxChange(e: any) {
    const emotion: FormArray = this.form.get('emotion') as FormArray;

    if (e.target.checked) {
      emotion.push(new FormControl(e.target.value));
    } else {
      const index = emotion.controls.findIndex(x => x.value === e.target.value);
      emotion.removeAt(index);
    }
  }
  
/*   fetchSelectedItems() {
    this.onCheckboxChange = this.emotionList.filter((value, index) => {
      return value.isChecked
    });
  }
  fetchCheckedIDs() {
    this.checkedIDs = []
    this.emotionList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  } */

  submit() {


    console.log(this.form.value);

  }
}

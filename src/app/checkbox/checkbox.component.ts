import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;

  emotionList = [
    { name: 'Happy' },
    { name: 'Sad' },
    { name: 'Scared' }
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


  
  submit() {
    console.log(this.form.value);
  }
}

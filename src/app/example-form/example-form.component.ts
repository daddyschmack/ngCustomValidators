import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControlName } from '@angular/forms';
import { CustomValidator} from '../../assets/custom-validators';
@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  public formName: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formName = this.fb.group({
      numberInput: ['', [
        Validators.required, CustomValidator.numberValidator
      ]]
    });
  }

}

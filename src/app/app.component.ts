import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormServiceService } from './services/form-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  response: any;
  dynamicForm = this._fb.group({});

  formsData = inject(FormServiceService);

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData() {
    this.formsData.getFormFields().subscribe((data: any) => {
      this.response = data.data;
      this.setFormsData(this.response);
      console.log(this.response);
      
    });
  }

  setFormsData(controls: any) {
    for (const control of controls) {
      const validators = [];
      if(control.validators.required){
        validators.push(Validators.required);
      }
      this.dynamicForm.addControl(control.name, this._fb.control(control.value,validators ));
    }
  }

  saveForm() {
    console.log(this.dynamicForm.value);
  }
}

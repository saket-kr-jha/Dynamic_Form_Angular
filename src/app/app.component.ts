import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormServiceService } from './services/form-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  constructor(){}

  response : any;

  formsData = inject(FormServiceService)

  ngOnInit(): void {
    this.formsData.getFormFields().subscribe((data: any)=>{
      this.response = data.data
      console.log(this.response);
    }

  )
    
  }

}

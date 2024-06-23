import {
  Component,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildrenDecorator,
  ViewContainerRef,
  ViewRef,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormServiceService } from './services/form-service.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { concatAll } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  showPrimary: boolean = true;
  constructor(private _fb: FormBuilder, ) {}

  response: any;
  dynamicForm = this._fb.group({});

  formsData = inject(FormServiceService);

  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public container!: ViewContainerRef;

  ngOnInit() {
    // 1st way to dynamically load component
    this.container.clear();
    const component = this.container.createComponent(DynamicComponent);
    component.instance.description = "Dynamic component";
    component.instance.clicked.subscribe(()=> {
      console.log("clicked");
    })

  }

  // @ViewChild('primary', { static: true })
  // public primary!: TemplateRef<any>;

  // @ViewChild('secondary', { static: true })
  // public secondary!: TemplateRef<any>;

  // ngOnInit(): void {
  //   let primaryView: ViewRef, secondaryView: ViewRef;
  //   setInterval(() => {
  //     this.container.detach();
  //     if (this.showPrimary) {
  //       if (primaryView) {
  //         this.container.insert(primaryView);
  //       } else {
  //         this.container.createEmbeddedView(this.primary, { text: 'primary' });
  //       }
  //     } else {
  //       if (secondaryView) {
  //         this.container.insert(secondaryView);
  //       } else {
  //         this.container.createEmbeddedView(this.secondary, {
  //           text: 'secondary',
  //         });
  //       }
  //     }
  //     this.showPrimary = !this.showPrimary;
  //   },1000);
  //   this.getFormData();
  // }

  // getFormData() {
  //   this.formsData.getFormFields().subscribe((data: any) => {
  //     this.response = data.data;
  //     this.setFormsData(this.response);
  //     console.log(this.response);
  //   });
  // }

  // setFormsData(controls: any) {
  //   for (const control of controls) {
  //     const validators = [];
  //     if (control.validators.required) {
  //       validators.push(Validators.required);
  //     }
  //     this.dynamicForm.addControl(
  //       control.name,
  //       this._fb.control(control.value, validators)
  //     );
  //   }
  // }

  // saveForm() {
  //   console.log(this.dynamicForm.value);
  // }

 
}

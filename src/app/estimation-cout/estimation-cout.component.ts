import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AnnoncesServicesService } from '../services/annonces-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css'],
})
export class EstimationCoutComponent {
  estimationForm!: FormGroup;
  liste_position: string[] = ['vide', 'haut', 'bas'];
  cout!: Number;
  showMe: boolean = false;
  constructor(
    private _builder: FormBuilder,
    private _service_annonce: AnnoncesServicesService
  ) {
    this.estimationForm = this._builder.group({
      position: ['', Validators.required],
      nb_caractere: [
        '',
        Validators.compose([Validators.required, Validators.max(60)]),
      ],
    });
  }

  // customMaxValue(custumerValue: number) {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const value = control.value;
  //     if (value > custumerValue) {
  //       return { maxValueExceeded: true };
  //     }
  //     return null;
  //   };
  // }

  sendEstimation() {
    this.showMe = true;
    if (this.estimationForm.get('position')?.value === 'haut') {
      if (Number(this.estimationForm.get('nb_caractere')?.value) <= 30) {
        this.cout = 10;
      } else {
        this.cout = 20;
      }
    }
    if (this.estimationForm.get('position')?.value === 'bas') {
      if (Number(this.estimationForm.get('nb_caractere')?.value) <= 30) {
        this.cout = 5;
      } else {
        this.cout = 15;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Annonce } from '../Models/annonce';
import { AnnoncesServicesService } from '../services/annonces-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css'],
})
export class ListeAnnoncesComponent implements OnInit {
  liste_annonces: Annonce[] = [];
  constructor(private _service_annonce: AnnoncesServicesService) {}
  ngOnInit(): void {
    this.RecupererAllAnnonces();
  }

  RecupererAllAnnonces() {
    this._service_annonce.getAllAnnonces().subscribe({
      next: (data) => {
        if (data != null) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your annonce list',
            showConfirmButton: false,
            timer: 1500,
          });

          this.liste_annonces = data as Annonce[];
          for (let i = 0; i < this.liste_annonces.length; i++) {
            if (this.liste_annonces[i].etat === 'Annulée') {
              this.liste_annonces.splice(i, 1);
              i--;
            }
          }
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Your annonce list is empty',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'somthing was warrning',
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  }
}

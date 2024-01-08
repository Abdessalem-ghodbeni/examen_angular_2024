import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environement/environement';

@Injectable({
  providedIn: 'root',
})
export class AnnoncesServicesService {
  private backend_Url = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getAllAnnonces() {
    return this._http.get(`${this.backend_Url}/annonce`);
  }
  ajouterEstimation(estimation: any) {
    return this._http.post(`${this.backend_Url}/estimation`, estimation);
  }
}

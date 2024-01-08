import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { AnnoncesComponent } from './annonces/annonces.component';

const routes: Routes = [
  { path: '', redirectTo: 'annonces', pathMatch: 'full' },
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'estimation', component: EstimationCoutComponent },
  { path: 'liste/annonces', component: ListeAnnoncesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

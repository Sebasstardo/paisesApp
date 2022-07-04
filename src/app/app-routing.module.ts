import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/paises/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/paises/por-region/por-region.component';
import { PorPaisComponent } from './pais/paises/por-pais/por-pais.component';
import { VerPaisComponent } from './pais/paises/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: '',
    component: PorPaisComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

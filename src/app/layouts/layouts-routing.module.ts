import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    data: {
      title: 'Home Page',
      content: 'Ipulse co.,Ltd'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }

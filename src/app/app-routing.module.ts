import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateQrComponent } from './create-qr/create-qr.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'create', component: CreateQrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

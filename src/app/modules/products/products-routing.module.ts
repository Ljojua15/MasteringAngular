import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../crud/mini-project/home/home.component';
import { AddComponent } from '../../crud/mini-project/add/add.component';

const routes: Routes = [
  { path: 'mini-project/home', component: HomeComponent },
  { path: 'mini-project/add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

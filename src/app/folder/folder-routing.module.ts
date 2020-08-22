import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'product',
    component: ProductsComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}

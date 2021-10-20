import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent }, //birşey seçilmediğinde ana ekranım productcomponent olsun demek. pathMatch : full sadece ana sayfa için geçerli başka bir sayfa gelirse bunu elimine et demektir.
  { path: 'products', component: ProductComponent },
  { path: 'products/category/:categoryId', component: ProductComponent }, // : => değişken olduğunu gösterir unutma categoryId de yazılan ile gelen bire bir uyuşmalı.
  { path: 'products/add', component:ProductAddComponent, canActivate:[LoginGuard]},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

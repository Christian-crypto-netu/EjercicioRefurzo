import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearComponent } from './components/crear/crear.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'editar/:id', component: CrearComponent },
  { path: '**', redirectTo:  '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

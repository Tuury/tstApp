import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosPageModule)
  },
  {
    path: 'mis-facturas',
    loadChildren: () => import('./mis-facturas/mis-facturas.module').then(m => m.MisFacturasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'descargas',
    loadChildren: () => import('./descargas/descargas.module').then(m => m.DescargasPageModule)
  },
  {
    path: 'mis-pedidos',
    loadChildren: () => import('./mis-pedidos/mis-pedidos.module').then(m => m.MisPedidosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'recuperar-password', loadChildren: './recuperar-password/recuperar-password.module#RecuperarPasswordPageModule' },
  { path: 'buscador', loadChildren: './buscador/buscador.module#BuscadorPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'carrito', loadChildren: './carrito/carrito.module#CarritoPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

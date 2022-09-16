import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'store/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

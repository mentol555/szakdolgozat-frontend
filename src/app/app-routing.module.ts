import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthGuardClass } from './core/guard/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardClass],
  exports: [RouterModule]
})
export class AppRoutingModule { }

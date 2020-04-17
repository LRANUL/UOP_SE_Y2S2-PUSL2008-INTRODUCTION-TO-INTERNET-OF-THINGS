import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./office/side-menu/side-menu.module').then( m => m.SideMenuPageModule)
  },  {
    path: 'degree-programs-modal',
    loadChildren: () => import('./office/commonModals/degree-programs-modal/degree-programs-modal.module').then( m => m.DegreeProgramsModalPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

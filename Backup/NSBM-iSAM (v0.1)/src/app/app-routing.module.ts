import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'prefix'
    },
    {
        path: 'Login',
        loadChildren: () => import ('./public/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'Student',
        loadChildren: () => import ('./student/student.module').then(m => m.StudentPageModule)
    },
    {
        path: 'Lecturer',
        loadChildren: () => import ('./lecturer/lecturer.module').then(m => m.LecturerPageModule)
    }, {
        path: 'Signup',
        loadChildren: () => import ('./public/signup/signup.module').then(m => m.SignupPageModule)
    }, {
        path: 'program-office',
        loadChildren: () => import ('./programOffice/side-menu/side-menu.module').then(m => m.SideMenuPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}

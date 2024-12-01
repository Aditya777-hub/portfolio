import { Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'contacts', loadComponent: () => import('./contacts/contacts.component').then(c => c.ContactsComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then(c => c.ProjectsComponent) },
    { path: '**', redirectTo: '/home' }

];

import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { NotFound } from './pages/not-found/not-found';
import { ProjectDetails } from './pages/project-details/project-details';

export const routes: Routes = [
    {
        path: 'portfolio',
        component: Main, 
    },
    {
        path: 'portfolio/projects',
        component: ProjectDetails,
    },
    {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
        children: [
            {
                path: 'cliente',
                title: 'Clientes',
                loadComponent: () => import ('./home/pages/cliente/cliente.component'),
            },{
                path: 'vehiculo',
                title: 'Vehiculos',
                loadComponent: () => import('./home/pages/vehiculo/vehiculo.component')
            },{
                path: 'registro-cliente',
                title: 'Registrar Cliente',
                loadComponent: () => import('./home/pages/registro-cliente/registro-cliente.component')
            },{
                path: 'registro-vehiculo',
                title: 'Registrar Vehiculo',
                loadComponent: () => import('./home/pages/registro-vehiculos/registro-vehiculos.component')
            },{
                path: '',
                redirectTo: 'cliente',
                pathMatch: 'full'
            },
        ],
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

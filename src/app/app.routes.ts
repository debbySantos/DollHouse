import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroProdComponent } from './pages/cadastro-prod/cadastro-prod.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login usuários'
    },
    {
        path: 'cadastrar-produto',
        component: CadastroProdComponent,
        title: 'Cadastrar Produto'
    }
];

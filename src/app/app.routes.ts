import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroProdComponent } from './pages/cadastro-prod/cadastro-prod.component';
import { GerenciamentoEstoqueComponent } from './pages/gerenciamento-estoque/gerenciamento-estoque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

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
        path: 'cadastrarProduto',
        component: CadastroProdComponent,
        title: 'Cadastrar Produto'
    },
    {
        path: 'gerenciamentoEstoque', 
        component: GerenciamentoEstoqueComponent,
        title: 'Gerenciamento de estoque'
    }, 
    {
        path: 'cadastro',
        component: CadastroComponent,
        title: 'Cadastro'
    }
];

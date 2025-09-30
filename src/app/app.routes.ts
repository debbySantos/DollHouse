import { Routes } from '@angular/router';
import { Carrinho } from './components/carrinho/carrinho';
import { VerProduto } from './components/ver-produto/ver-produto';

export const routes: Routes = [
    {path: 'carrinho', component: Carrinho},
    {path: 'home', component: Carrinho},
    {path: '', component: Carrinho},
    {path: 'ver-produto', component: VerProduto}
];


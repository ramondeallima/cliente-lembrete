import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';


const routes: Routes = [
  { path: '', component: ListaLembreteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

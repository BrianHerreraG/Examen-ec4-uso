import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './public/principal/principal.component';
import { Test4Component } from './public/test4/test4.component';
import { Preguntast4Component } from './public/preguntast4/preguntast4.component';
import { ListaPreguntasComponent } from './public/lista-preguntas/lista-preguntas.component';
import { LoginComponent } from './private/login/login.component';
import { AdminComponent } from './private/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { DescargasComponent } from './public/descargas/descargas.component';
import { IndicacionesComponent } from './public/indicaciones/indicaciones.component';
import { AcercadeComponent } from './public/acercade/acercade.component';
import { SelectTipoComponent } from './public/select-tipo/select-tipo.component';
import { Test3Component } from './public/test3/test3.component';
import { Preguntast3Component } from './public/preguntast3/preguntast3.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'lista', component: ListaPreguntasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] },
  { path: 'principal/seleccionar/test4', component: Test4Component },
  { path: 'principal/seleccionar/test3', component: Test3Component },
  { path: 'principal/seleccionar', component: SelectTipoComponent },
  { path: 'principal/descargas', component: DescargasComponent },
  { path: 'principal/indicaciones', component: IndicacionesComponent },
  { path: 'principal/acercade', component: AcercadeComponent },
  { path: 'principal/seleccionar/test4/examen4', component: Preguntast4Component },
  { path: 'principal/seleccionar/test3/examen3', component: Preguntast3Component },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

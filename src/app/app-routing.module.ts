import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonarComponent } from './components/donar/donar.component';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { AsientosComponent } from './inventario/asientos/asientos.component';
import { InventarioComponent } from './inventario/inventario/inventario.component';
import { AseoComponent } from './inventario/aseo/aseo.component';
import { ComunicacionComponent } from './inventario/comunicacion/comunicacion.component';
import { AccesoComponent } from './inventario/acceso/acceso.component';
import { SilladeruedasComponent } from './inventario/silladeruedas/silladeruedas.component';
import { RecreacionComponent } from './inventario/recreacion/recreacion.component';
import { StandersComponent } from './inventario/standers/standers.component';
import { EquiposterapiaComponent } from './inventario/equiposterapia/equiposterapia.component';
import { AyudacaminarComponent } from './inventario/ayudacaminar/ayudacaminar.component';
import { CarriolasComponent } from './inventario/carriolas/carriolas.component';
import { NavadminComponent } from './administrador/navadmin/navadmin.component';
import { AgregarArticuloComponent } from './administrador/agregar-articulo/agregar-articulo.component';
import { ListarArticuloComponent } from './administrador/listar-articulo/listar-articulo.component';
import { EditarArticuloComponent } from './administrador/editar-articulo/editar-articulo.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';


//Rutas de navegacion 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'donar', component: DonarComponent},
  { path: 'voluntarios', component: VoluntariosComponent},
  //Rutas del inventario
  { path: 'inventario', component: InventarioComponent},
  { path: 'asientos', component: AsientosComponent},
  { path: 'aseo', component: AseoComponent},
  { path: 'comunicacion', component: ComunicacionComponent},
  { path: 'acceso', component: AccesoComponent},
  { path: 'silladeruedas', component: SilladeruedasComponent},
  { path: 'recreacion', component: RecreacionComponent},
  { path: 'standers', component: StandersComponent},
  { path: 'equiposterapia', component: EquiposterapiaComponent},
  { path: 'ayudacaminar', component: AyudacaminarComponent},
  { path: 'carriolas', component: CarriolasComponent},

  { path: 'dashboard', component: DashboardComponent},
  { path: 'navadmin', component: NavadminComponent},
  { path: 'agregar-articulo', component: AgregarArticuloComponent},
  { path: 'listar-articulo', component: ListarArticuloComponent},
  { path: 'editar-articulo/:id', component: EditarArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

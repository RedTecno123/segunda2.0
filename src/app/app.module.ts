import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DonarComponent } from './components/donar/donar.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { AsientosComponent } from './inventario/asientos/asientos.component';
import { AseoComponent } from './inventario/aseo/aseo.component';
import { ComunicacionComponent } from './inventario/comunicacion/comunicacion.component';
import { AccesoComponent } from './inventario/acceso/acceso.component';
import { SilladeruedasComponent } from './inventario/silladeruedas/silladeruedas.component';
import { RecreacionComponent } from './inventario/recreacion/recreacion.component';
import { StandersComponent } from './inventario/standers/standers.component';
import { EquiposterapiaComponent } from './inventario/equiposterapia/equiposterapia.component';
import { AyudacaminarComponent } from './inventario/ayudacaminar/ayudacaminar.component';
import { CarriolasComponent } from './inventario/carriolas/carriolas.component';
import { InventarioComponent } from './inventario/inventario/inventario.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavadminComponent } from './administrador/navadmin/navadmin.component';
import { AgregarEmpleadoComponent } from './administrador/agregar-empleado/agregar-empleado.component';
import { AgregarArticuloComponent } from './administrador/agregar-articulo/agregar-articulo.component';
import { EditarArticuloComponent } from './administrador/editar-articulo/editar-articulo.component';
import { ListarArticuloComponent } from './administrador/listar-articulo/listar-articulo.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonarComponent,
    NavmenuComponent,
    VoluntariosComponent,
    AsientosComponent,
    AseoComponent,
    ComunicacionComponent,
    AccesoComponent,
    SilladeruedasComponent,
    RecreacionComponent,
    StandersComponent,
    EquiposterapiaComponent,
    AyudacaminarComponent,
    CarriolasComponent,
    InventarioComponent,
    FooterComponent,
    NavadminComponent,
    AgregarEmpleadoComponent,
    AgregarArticuloComponent,
    EditarArticuloComponent,
    ListarArticuloComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

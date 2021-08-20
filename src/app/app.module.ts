import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LecturadatosComponent } from './lecturadatos/lecturadatos.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaMedianaModaComponent } from './media-mediana-moda/media-mediana-moda.component';
import { CuadmediosComponent } from './cuadmedios/cuadmedios.component';
import { PromediomovilComponent } from './promediomovil/promediomovil.component';
import { SuavizamientoComponent } from './suavizamiento/suavizamiento.component';
import { RegresionlinealComponent } from './regresionlineal/regresionlineal.component';
import { RegresioncuadraticaComponent } from './regresioncuadratica/regresioncuadratica.component';
import { MontecarloComponent } from './montecarlo/montecarlo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LecturadatosComponent,
    MediaMedianaModaComponent,
    CuadmediosComponent,
    PromediomovilComponent,
    SuavizamientoComponent,
    RegresionlinealComponent,
    RegresioncuadraticaComponent,
    MontecarloComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'lecturadatos', component: LecturadatosComponent },
      { path: '', component: HomeComponent },
      { path: 'media-mediana-moda', component: MediaMedianaModaComponent },
      { path: 'cuadmedios', component: CuadmediosComponent },
      { path: 'promediomovil', component: PromediomovilComponent }
    ]),
    MatDividerModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

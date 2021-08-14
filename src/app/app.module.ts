import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';;
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DetallesSolicitudComponent } from './detalles-solicitud/detalles-solicitud.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatDialogModule } from '@angular/material/dialog';
import { ReclamoPopupComponent } from './reclamo-popup/reclamo-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { ReclamoComponent } from './reclamo/reclamo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SolicitudComponent,
    CrearSolicitudComponent,
    DetallesSolicitudComponent,
    NotFoundComponent,
    ReclamoPopupComponent,
    ReclamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

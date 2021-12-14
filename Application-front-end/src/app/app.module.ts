import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { ListeMenuComponent } from './components/liste-menu/liste-menu.component';
import { FicheMenuComponent } from './components/fiche-menu/fiche-menu.component';
import { ListeRepasComponent } from './components/liste-repas/liste-repas.component';
import { FicheRepasComponent } from './components/fiche-repas/fiche-repas.component';
import { ListeIngredientComponent } from './components/liste-ingredient/liste-ingredient.component';
import { ListeCommandeComponent } from './components/liste-commande/liste-commande.component';
import { FicheCommandeComponent } from './components/fiche-commande/fiche-commande.component';
import { TableComponent } from './components/table/table.component';
import { ListeBeneficeComponent } from './components/liste-benefice/liste-benefice.component'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card'; 
import {LayoutModule} from '@angular/cdk/layout'; 


@NgModule({
  declarations: [
    AppComponent,
    ListeMenuComponent,
    FicheMenuComponent,
    ListeRepasComponent,
    FicheRepasComponent,
    ListeIngredientComponent,
    ListeCommandeComponent,
    FicheCommandeComponent,
    TableComponent,
    ListeBeneficeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCardModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

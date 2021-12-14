import { ListeIngredientComponent } from './components/liste-ingredient/liste-ingredient.component';
import { FicheCommandeComponent } from './components/fiche-commande/fiche-commande.component';
import { ListeCommandeComponent } from './components/liste-commande/liste-commande.component';
import { FicheRepasComponent } from './components/fiche-repas/fiche-repas.component';
import { ListeRepasComponent } from './components/liste-repas/liste-repas.component';
import { FicheMenuComponent } from './components/fiche-menu/fiche-menu.component';
import { ListeMenuComponent } from './components/liste-menu/liste-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeBeneficeComponent } from './components/liste-benefice/liste-benefice.component';

const routes: Routes = [
   { path: '', redirectTo: 'liste-menu', pathMatch: 'full' },
   { path: 'liste-menu', component: ListeMenuComponent },
   { path: 'fiche-menu', component: FicheMenuComponent },
   { path: 'liste-repas', component: ListeRepasComponent },
   { path: 'fiche-repas', component: FicheRepasComponent },
   { path: 'liste-commande', component: ListeCommandeComponent },
   { path: 'fiche-commande', component: FicheCommandeComponent },
   { path: 'liste-ingredient', component: ListeIngredientComponent },
   { path: 'liste-benefice', component: ListeBeneficeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
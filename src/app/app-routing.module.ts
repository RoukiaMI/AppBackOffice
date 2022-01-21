import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { HeaderComponent } from './features/header/header.component'
import { FooterComponent } from './features/footer/footer.component'
import { ChiffreAffaireComponent } from './features/chiffre-affaire/chiffre-affaire.component';
import { DonneesHistoriqueComponent } from './pages/donnees-historique/donnees-historique.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'detailsproduit', component: DetailsProduitComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'donneesHistorique', component: DonneesHistoriqueComponent},
  { path: 'chiffreAffaire', component: ChiffreAffaireComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

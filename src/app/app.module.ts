import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';
import { ProduitsService } from './core/services/produits.service';
import { ProduitComponent } from './pages/produit/produit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailsProduitComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

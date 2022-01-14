import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../core/services/produits.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  listproducts: any;
  listsproducts: any;
  //unProduit: Produit;

  constructor(public productsService: ProduitsService, public http: HttpClient) {
    this.listproducts = []
    this.listsproducts = []

  }

  ngOnInit(): void {
    this.productsService.getProduitsFromJson().subscribe(res => {
      this.listproducts = res;
      console.log(this.listproducts)
    })
  }

  getProducts() {
    this.listproducts = this.productsService.getProduitsFromJson()

    console.log(this.listproducts)
    // = res
    console.log("TOITOTITOI")


  }
 

  incrementQteStock(idName:string, qte:number) {
   // Annulation d'une commande donc on increment ce qu'on a decrementer
  }

  decrementQteStock(idName:string, qte:number) {

  // a la commande d'un produit
  }

  changePercent(idName:string, p:number) {

  // prendre un nom de produit et un pourcentage
  }

  refreshListStock(id:number, value:number, name:string) {
  // recuperer la liste dans le stock 
  }

  postListStock() {
    //console.log(this.listStock);
  
  }

  deleteListStock() {
    //console.log(this.listStock);
   
  }

  refreshListPercent(id:number, percent:number, name:string) {
   
  }

  postListPercent() {
    //console.log(this.listStock);
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../core/services/produits.service'
import { Produit } from '../produit';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  listproducts: any;
  listsproducts: any;
  //unProduit: Produit;

  constructor(public productsService: ProduitsService,public http: HttpClient) {
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
    this.listproducts= this.productsService.getProduitsFromJson()
      
    console.log(this.listproducts)
      // = res
      console.log("TOITOTITOI")
        
  
  }

  //getData() {
  //  this.http.get('assets/data/menu1.json').map((res: { json: () => any; }) => res.json()).subscribe((res: { menuItems: any; }) => {
  //    this.listsproducts = res.menuItems;
  //    console.log(this.listsproducts);
  //  },
  //    (err: any) => {
  //      alert('failed loading json data');
  //    });
  //}

  getProductsById(Num: any) {
    for (let produit in this.listproducts) {
     // if (produit.id==2)
      console.log(produit)
      return produit
    }
    return this.listproducts
  }
}

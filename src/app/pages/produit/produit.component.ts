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

 products: any;
  listsproducts: any;
  product: any;
  valueQ: any;
  constructor(public productsService: ProduitsService, public http: HttpClient) {
    this.products = []
    this.listsproducts = []
    this.valueQ=''

  }

  ngOnInit(): void {
    this.productsService.getData().subscribe((res:any) => {
      this.products = res;
      console.log(this.products)
    }, (err:any) => {console.log(err.message) })
    //this.getProducts()
  }

  getValueInput(event:any) {
    this.valueQ = event.target.value;
  }

  getProducts() {
    this.products = this.productsService.getData()

    console.log(this.products)
    // = res
    console.log("TOITOTITOI")


  }
 
  getProductId(id:any) {
    for (let p of this.products) {
      if (p.tigID == 1) {
        this.product = p;
      }
    }
  }

  getProductName(name:any) {
    for (let p of this.products) {
      if (p.name == name) {
        this.product = p;
      }
    }
  }

  getProductNameID(name:any) {
    for (let p of this.products) {
      if (p.name == name) {
        return p.tigID
      }
    }
  }

  getProductQuantity(name:any) {
    for (let p of this.products) {
      if (p.name == name) {
        return p.quantity
      }
    }

  }

  refreshData() {
    this.productsService.getData().subscribe(res => {
      this.products = res;

    }, (err) => {
      alert('failerd loading json data');
      console.log(err);
    });
  }

  incrementQteStock(name:any, qte:any) {
    var idName = this.getProductNameID(name);
    this.productsService.increment(name, qte).subscribe((res:any) => {
      console.log(res);
      this.refreshData();

    },
      (err:any) => {
        alert(err.message);
      });
   
  }

  decrementQteStock(name:any, qte:any,price:any) {
    if (this.getProductQuantity(name) - qte < 0) {
      return alert("Quantité insufisante")
    }
    var idName = this.getProductNameID(name);

    this.productsService.decrement(name, qte,price).subscribe((res:any) => {
      console.log(res);
      this.refreshData();

    },
      (err:any) => {
        alert('failed loading json data');
      });
    

  }

  changePercent(name:any, p:any) {
    console.log(typeof parseInt(p));
    if (parseInt(p) < 0 || parseInt(p) > 100) {
      return alert("Valeur de pourcentage incorrect")
    }
    var idName = this.getProductNameID(name);

    this.productsService.percent(name, p).subscribe((res:any) => {
      console.log(res);
      this.refreshData();

    },
      (err:any) => {
        alert(err.message);
      });

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

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
  produit:any;

  constructor(public productsService: ProduitsService,public http: HttpClient) {
    this.listproducts = []
    this.listsproducts = []
    this.produit=""
   
  }

  ngOnInit(): void {
    this.productsService.getData().subscribe((res:any) => {
      this.listproducts = res;
      console.log(this.listproducts)
    })
  }

  getProductQuantity(name: any) {
    for (let p of this.listproducts) {
      if (p.name == name) {
        return p.quantity
      }
    }

  }

  refreshData() {
    this.productsService.getData().subscribe((res: any) => {
      this.listproducts = res;

    }, (err:any) => {
      alert('failerd loading json data');
      console.log(err);
    });
  }

  getProductNameID(name: any) {
    for (let p of this.listproducts) {
      if (p.name == name) {
        this.produit = p;
        
      }
    }
  }
  getProductName(name: any) {
    for (let p of this.listproducts) {
      if (p.name == name) {
        this.produit = p;
      }
    }
  }
  getProducts() {
    this.listproducts= this.productsService.getProduitsFromJson()
      
    console.log(this.listproducts)
      // = res
      console.log("TOITOTITOI")
        
  
  }

  incrementQteStock(name: any, qte: any) {
  
    this.productsService.increment(name, qte).subscribe((res: any) => {
      console.log(res);
      this.refreshData();

    },
      (err: any) => {
        alert(err.message);
      });

  }

  decrementQteStock(name: any, qte: any, price: any) {
    if (this.getProductQuantity(name) - qte < 0) {
      return alert("Quantité insufisante")
    }
    

    this.productsService.decrement(name, qte, price).subscribe((res: any) => {
      console.log(res);
      this.refreshData();

    },
      (err:any) => {
        alert('failed loading json data');
      });


  }

  changePercent(name: any, p: any) {
    console.log(typeof parseInt(p));
    if (parseInt(p) < 0 || parseInt(p) > 100) {
      return alert("Valeur de pourcentage incorrect")
    }

    this.productsService.percent(name, p).subscribe((res: any) => {
      console.log(res);
      this.refreshData();

    },
      (err: any) => {
        alert(err.message);
      });

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

import { Injectable } from '@angular/core';
//import products from '../../shared/products.json';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../../pages/produit';
interface UnproduitObj {
  id: string,
  name: string,
  category: number,
  price: number,
  unit: string,
  availability: boolean,
  sale: boolean,
  discount: number,
  comments: string,
  owner: string
}
interface ItemsResponse {
  produits: Array<UnproduitObj>;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  urlApi;

  constructor(public http: HttpClient) {
    this.urlApi = "http://127.0.0.1:8000";  
  }

  getProduitsFromJson() {
    return this.http.get<Produit[]>('../assets/data/products.json')
  }

  getData() {
    return this.http.get(this.urlApi+"/detailproduits/");
  }



  increment( name: string, qte:number) {
    return this.http.get(this.urlApi + "/modifStockA/" + name + "/" + qte + "/");
  }

  /*$invendu(name: string, qte: number) {
    return this.http.get(this.urlApi + "/invendu/" + name + "/" + qte + "/");
  }*/

  decrement(name: string, qte: number, price: number) {
    return this.http.get(this.urlApi + "/modifStockR/" + name + "/" + qte + "/" + price+"/");
  }

  percent(name:string, p:number) {
    return this.http.get(this.urlApi + "/modifierPourcentage/" + name + "/" + p + "/");
  }

  

}

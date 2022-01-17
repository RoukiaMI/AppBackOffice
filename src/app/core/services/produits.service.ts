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
url=
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(public http: HttpClient) { }

  getProduitsFromJson() {
    return this.http.get<Produit[]>('../assets/data/products.json')
  }
  

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public activeProduct = new BehaviorSubject<Product[]>([]);
  public products = new BehaviorSubject<Product[]>([]);
  public activeComponent = new BehaviorSubject<string>("Type");
  searchParam: string = '';
  sortByName: string = '';
  sortByRating: string = '';
  orderBy: string = 'name';
  orderDirection: string = 'ASC';
  minPrice: number = 0;
  maxPrice: number = 0;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('/assets/products/products.json').subscribe(result => {
      this.products.next(result);
    })
  }

  getSearchedProducts() {
    var searchProducts: Product[] = [];
    this.http.get<Product[]>('/assets/products/products.json').subscribe(result => {
      for (var i = 0; i < result.length; i++) {
        if (result[i].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
          if (this.activeComponent.value !== "Type" && result[i].type !== this.activeComponent.value) {
            continue;
          }
          searchProducts.push(result[i]);
        }
      }

      searchProducts = this.orderProducts(searchProducts, this.orderBy, this.orderDirection);

      var filteredProducts: Product[] = [];
      for (var j = 0; j < searchProducts.length; j++) {
        var product = searchProducts[j];
        var isMinPriceValid = this.minPrice !== 0 && product.price >= this.minPrice;
        var isMaxPriceValid = this.maxPrice !== 0 && product.price <= this.maxPrice;

        if ((this.minPrice === 0 || isMinPriceValid) && (this.maxPrice === 0 || isMaxPriceValid)) {
          filteredProducts.push(product);
        }
      }

      this.products.next(filteredProducts);
    });
  }

  orderProducts(products: Product[], orderBy: string, orderDirection: string): Product[] {
    return products.sort((a, b) => {
      let aValue, bValue;

      // Get the values to compare based on the selected orderBy value
      if (orderBy === 'rating') {
        aValue = a.rating;
        bValue = b.rating;
      } else if (orderBy === 'price') {
        aValue = a.price;
        bValue = b.price;
      } else {
        // Default: order by name
        aValue = a.name;
        bValue = b.name;
      }

      // Compare the values and return the comparison result based on the orderDirection
      if (aValue < bValue) {
        return orderDirection === 'ASC' ? -1 : 1;
      } else if (aValue > bValue) {
        return orderDirection === 'ASC' ? 1 : -1;
      } else {
        return 0;
      }


    });

  }
}

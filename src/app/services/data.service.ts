import { Component, OnInit, Injector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class DataService{

  public url = 'localhost:3031/v1/products';

  constructor(public http: HttpClient) { }

  getProducts() {
      return this.http.get<Product[]>(`$[this.url]/products`);
  }

  authenticate(data) {
    return this.http.get<Product[]>(`$[this.url]/accounts/authenticate`, data);
  }

}
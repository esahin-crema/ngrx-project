import { Component, OnInit } from '@angular/core';
import { Products } from "./../store/market";

@Component({
  selector: 'app-products',
  template: `
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" *ngFor="let product of products">
  <mat-card class="my-list">
  <mat-card-header>
    <div mat-card-avatar>
    <mat-icon aria-hidden="false">computer</mat-icon>
    </div>
    <mat-card-title>Computer</mat-card-title>
    <mat-card-subtitle>{{product.name}}</mat-card-subtitle>
  </mat-card-header>
  <mat-divider></mat-divider>
  <mat-card-content>
      <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
      <h3>{{product.name}}</h3>
      <span>$</span>
      <span class="pull-right">{{product.price}}</span>
      <div class="offer">Extra 5% Off. Cart value $ {{0.5 * product.price}}</div>
  </mat-card-content>
  <mat-divider></mat-divider>
  <mat-card-actions>
  <button mat-button color="accent" routerLink="/product/{{product.id}}">View</button>
  </mat-card-actions>
      </mat-card>
  </div> 
  <style>
  .example-card {
    max-width: 400px;
  }
  </style>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  products = Products

  constructor() { }

  ngOnInit(): void {
  }

}

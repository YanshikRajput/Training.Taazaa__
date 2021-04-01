import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  products: Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }
  
  
  getProducts(): Product[]
  {
    return [
      {
        ID: 1,
        Title: "Ball",
        Color: "Red",
        Price: 500,
        ExpiryDate: '10-8-2020'
      },
      {
        ID: 2,
        Title: "Bat",
        Color: "Black",
        Price: 1200,
        ExpiryDate: '2-8-2020'
      },
      {
        ID: 3,
        Title: "Bails",
        Color: "Grey",
        Price: 400,
        ExpiryDate: '3-7-2020'
      },
      {
        ID: 4,
        Title: "Stumps",
        Color: "Yellow",
        Price: 500,
        ExpiryDate: '4-3-2020'
      },
      {
        ID: 5,
        Title: "Pads",
        Color: "White",
        Price: 1200,
        ExpiryDate: '5-12-2020'
      }
    ]
  }

}

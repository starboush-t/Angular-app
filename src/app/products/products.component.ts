import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-1.png',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-2.png',
    },
    {
      id: 3,
      name: 'Apple iphone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/products/product-image-3.png',
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'Cayn',
      available: 'Available',
      image: '/assets/products/product-image-4.png',
    },
    {
      id: 5,
      name: 'LG Refrigerator With Door Cooling',
      price: '2815',
      color: 'Silver',
      available: 'Available',
      image: '/assets/products/product-image-5.png',
    },
    {
      id: 6,
      name: 'Dell Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'Silver',
      available: 'Available',
      image: '/assets/products/product-image-6.png',
    },
  ];
}

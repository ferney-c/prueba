import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
})
export default class ProductsComponent{
  public productsService = inject(ProductsService); // Inyectamos el servicio de productos.


  /* ngOnInit(): void {
    axios.get('/sanctum/csrf-cookie').then( () => {
      axios.get('api/products').then((response) => {
        console.log(response.data);
      });
    });
  } */
}

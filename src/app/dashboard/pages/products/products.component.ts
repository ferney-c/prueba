import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
})
export default class ProductsComponent {
  public productsService = inject(ProductsService); // Inyectamos el servicio de productos.
}

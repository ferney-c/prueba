import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-product.component.html',
})
export default class CreateProductComponent {
  public productsService = inject(ProductsService); // Inyectamos el servicio de productos.

  public myForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  public submitFormulario(): void {
    this.productsService.createProduct(this.myForm.value)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Product, ProductsResponse } from '../interfaces/products-req-response';
import { GlobalConstants } from '../../common/global-constants';
import { delay, map } from 'rxjs';
import CreateProductComponent from '../pages/create-product/create-product.component';

/**
 * Esta interfaz será utilizada para definir el estado de la aplicación.
 *
 * @interface State
 */
interface State {
  loading: boolean;
  products: any[];
}

@Injectable({
  providedIn: 'root',
})

/**
 * Este servicio será utilizado para obtener los productos de la aplicación.
 *
 * @export
 * @class ProductsService
 */
export class ProductsService {
  /**
   * Esta propiedad será utilizada para hacer peticiones HTTP.
   *
   * @private
   * @type {HttpClient}
   * @memberof ProductsService
   */
  private http = inject(HttpClient);

  /**
   * Esta propiedad será utilizada para almacenar el estado de la aplicación.
   *
   * @private
   * @type {signal<State>}
   * @memberof ProductsService
   */
  #state = signal<State>({
    loading: true,
    products: [], // Aquí se almacenan los productos.
  });

  public products = computed(() => this.#state().products); // Obtenemos los productos.
  public loading = computed(() => this.#state().loading); // Obtenemos el estado de carga.

  constructor() {
    this.http
      .get<ProductsResponse>(`${GlobalConstants.API_URL}/products`) // Hacemos una petición HTTP.
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          products: res.data, // Almacenamos los productos.
        });
      });
  }

  getProductById(id: string) {
    return this.http
      .get<Product>(`${GlobalConstants.API_URL}/products/${id}`) // Hacemos una petición HTTP.
      .pipe(
        delay(1000),
        map(res => res) // Obtenemos los datos.
      )
  }

  createProduct(obj: any) {
    const product = {
      name: obj.nombre,
      description: obj.descripcion,
      price: obj.precio,
    };
    
    return this.http
      .post<Product>(`${GlobalConstants.API_URL}/products`, product) // Hacemos una petición HTTP.
      .subscribe( () => {
        console.log('Datos guardados correctamente');
      });
  }
}

import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export default class ProductComponent {

  private route = inject(ActivatedRoute);
  private pruductsService = inject(ProductsService);

  public product = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.pruductsService.getProductById(id))
    )
  )

  public titleLabel = computed( () => {
    
    if ( this.product() ) {
      return `Información del producto: ${this.product()?.name}`;
    }

    return 'Informacion del producto';
  } );

}

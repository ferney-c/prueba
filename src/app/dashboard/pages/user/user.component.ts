import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById(id))
    )
  )

  public titleLabel = computed( () => {
    
    if ( this.user() ) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return 'Informacion del usuario';
  });

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}

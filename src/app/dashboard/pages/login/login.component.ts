import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autentication.service';
import axios from 'axios';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {
  public myForm!: FormGroup;

  

  constructor(private fb: FormBuilder, private login: AutenticacionService) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: ['ferney@gmail.com', Validators.required],
      password: ['12345678', Validators.required]
    });
  }

  public me(){
    axios.get('/api/user').then((response) => {
      console.log(response.data);
    });
  }

  user = { 'username': 'ferney129' };

  public submitFormulario(): void {

    axios.get('/sanctum/csrf-cookie').then( () => {
      axios.post('/login', this.myForm.value).then((response) => {
        console.log(response);
        //window.location.href = '/dashboard/product-list';
      });
    });


    //console.log('Enviando login ...', this.myForm.value);
    /* if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    } */
    /* if (!this.login.ingresarAplicativo(this.myForm.value)) {
      alert('usuario o contraseña invalida');
    } */
  }
}
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
    axios.defaults.withCredentials = true; // para que axios envie las cookies al servidor
    axios.defaults.withXSRFToken = true; // para que axios envie el token de csrf al servidor
    axios.defaults.baseURL = 'http://localhost:8000'; // para que axios envie el token de csrf al servidor

    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['fernigga@gmail.com', Validators.required],
      password: ['fernigga', Validators.required]
    });
  }

  user = { 'username': 'ferney129' };

  public submitFormulario(): void {

    axios.get('/sanctum/csrf-cookie').then( () => {
      axios.post('/login', this.myForm.value).then((response) => {
        console.log(response);
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
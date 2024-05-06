import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import axios from 'axios';

axios.defaults.withCredentials = true; // para que axios envie las cookies al servidor
axios.defaults.withXSRFToken = true; // para que axios envie el token de csrf al servidor
axios.defaults.baseURL = 'http://localhost:8000'; // para que axios envie el token de csrf al servidor

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

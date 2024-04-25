import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';


const routes: Routes = [
  // Exemple de route :
  // { path: 'chemin', component: NomDuComposant }
];
export default routes;

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

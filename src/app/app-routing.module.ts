import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageRegistroComponent } from './pages/page-registro/page-registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: PageRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

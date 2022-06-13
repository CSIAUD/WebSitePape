import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { GuitareComponent } from './pages/guitare/guitare.component';

const routes: Routes = [
  { path: "", redirectTo: "guitares", pathMatch: "full"},
  { path: "guitare/:id", component: GuitareComponent},
  { path: "guitares", component: GuitareListComponent},
  { path: "**", redirectTo: "guitares"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64], // [x, y]
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

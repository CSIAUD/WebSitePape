import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouteauListComponent } from './pages/couteau-list/couteau-list.component';
import { CouteauComponent } from './pages/couteau/couteau.component';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { GuitareComponent } from './pages/guitare/guitare.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent},
  { path: "guitare/:id", component: GuitareComponent},
  { path: "guitares", component: GuitareListComponent},
  { path: "couteau/:id", component: CouteauComponent},
  { path: "couteaux", component: CouteauListComponent},
  { path: "**", redirectTo: "guitares"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64], // [x, y]
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

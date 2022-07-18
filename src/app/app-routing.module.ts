import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CouteauListComponent } from './pages/couteau-list/couteau-list.component';
import { CouteauComponent } from './pages/couteau/couteau.component';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { GuitareComponent } from './pages/guitare/guitare.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent},
  { path: "guitare/:id", component: GuitareComponent},
  { path: "guitares", component: GuitareListComponent},
  { path: "couteau/:id", component: CouteauComponent},
  { path: "couteaux", component: CouteauListComponent},
  { path: "contact", component: ContactComponent},
  { path: "contact/:id", component: ContactComponent},
  { path: "links", component: LinksComponent},
  { path: "cgv", component: ConditionsComponent},
  { path: "**", redirectTo: "landing"},
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CouteauListComponent } from './pages/couteau-list/couteau-list.component';
import { CouteauComponent } from './pages/couteau/couteau.component';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { GuitareComponent } from './pages/guitare/guitare.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "guitare/:id", component: GuitareComponent},
  { path: "guitares", component: GuitareListComponent},
  { path: "couteau/:id", component: CouteauComponent},
  { path: "couteaux", component: CouteauListComponent},
  { path: "contact", component: ContactComponent},
  { path: "contact/:id", component: ContactComponent},
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

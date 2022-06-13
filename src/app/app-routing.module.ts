import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "guitares", pathMatch: "full"},
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

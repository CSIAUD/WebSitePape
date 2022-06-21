import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { GuitareComponent } from './pages/guitare/guitare.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { SafePipe } from './pipes/safe/safe.pipe';
import { ExplanationComponent } from './component/explanation/explanation.component';
import { CouteauComponent } from './pages/couteau/couteau.component';
import { CouteauListComponent } from './pages/couteau-list/couteau-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GuitareComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    GuitareListComponent,
    SafePipe,
    ExplanationComponent,
    CouteauComponent,
    CouteauListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

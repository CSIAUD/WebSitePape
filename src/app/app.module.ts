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
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarousselComponent } from './component/caroussel/caroussel.component';
import { FormattingPipe } from './pipes/formatting/formatting.pipe';

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
    CouteauListComponent,
    LandingComponent,
    ContactComponent,
    CarousselComponent,
    FormattingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

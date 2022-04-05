import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { ProductsComponent } from './products/products.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { DatetimeserviceService } from './datetimeservice.service';
import { GetjasondataService } from './getjasondata.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';
import { HttpDataRequestService } from './http-data-request.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    ChildComponent,
    Child2Component,
    ProductsComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    ReactiveFormComponent,
    ReactiveAddressFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatetimeserviceService, GetjasondataService, HttpDataRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

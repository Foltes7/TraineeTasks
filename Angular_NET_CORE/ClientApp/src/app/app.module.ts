import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { ProductsStore } from './products/state/products-state';
import { OrdersStore } from './orders/state/orders-state';
import { CustomersStore } from './customers/state/customers-state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    NgxsModule.forRoot([ ProductsStore, OrdersStore, CustomersStore], { developmentMode: !environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

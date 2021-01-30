import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDeleteWindowComponent } from './confirmation-delete-window/confirmation-delete-window.component';
import { EdititngOrderProductsComponent } from './editing-order-products/editing-order-products.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ConfirmationDeleteWindowComponent, EdititngOrderProductsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyModalPageRoutingModule } from './my-modal-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyModalPage } from './my-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModalPageRoutingModule
  ],
  declarations: [MyModalPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Add this line
  ],
})
export class MyModalPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ButtonComponent
  ]
})
export class SharedModule { }

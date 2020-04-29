import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent, BtnAutoFocusDirective } from './button.component';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent, BtnAutoFocusDirective],
  providers: [],
})
export class ButtonModule {
}

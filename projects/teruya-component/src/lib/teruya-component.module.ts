import { NgModule } from '@angular/core';
import { TeruyaComponentComponent } from './teruya-component.component';
import { TeruyaButtonComponent } from './components/teruya-button/teruya-button.component';
import { StickyButtonComponent } from './components/sticky-button/sticky-button.component';

@NgModule({
  declarations: [TeruyaComponentComponent, TeruyaButtonComponent, StickyButtonComponent],
  imports: [
  ],
  exports: [TeruyaComponentComponent, TeruyaButtonComponent, StickyButtonComponent]
})
export class TeruyaComponentModule { }

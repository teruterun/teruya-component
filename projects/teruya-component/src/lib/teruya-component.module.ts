import { NgModule } from '@angular/core';
import { TeruyaComponentComponent } from './teruya-component.component';
import { TeruyaButtonComponent } from './components/teruya-button/teruya-button.component';

@NgModule({
  declarations: [TeruyaComponentComponent, TeruyaButtonComponent],
  imports: [
  ],
  exports: [TeruyaComponentComponent, TeruyaButtonComponent]
})
export class TeruyaComponentModule { }

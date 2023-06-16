import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ]
})
export class SharedModule { }

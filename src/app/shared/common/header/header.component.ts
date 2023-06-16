import { Component,OnInit } from '@angular/core';
import {ModalService} from "src/app/services/modal.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(public modal:ModalService){}
  ngOnInit(): void {

  }
  openModal($event:Event){
    $event.preventDefault();
    this.modal.toggleModel('auth');
  }
}

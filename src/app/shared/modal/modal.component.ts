import { Component, OnInit,Input,ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalId:string='';
  constructor(public modal:ModalService,public el:ElementRef){}

  ngOnInit(): void {
    this.modal.register('auth');
    document.body.appendChild(this.el.nativeElement);
  }
  isClose(){
    this.modal.toggleModel(this.modalId);
  }
}

import { NgForm } from '@angular/forms';
import { shoesInterface } from './../../models/shoes';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  // @Input() userUid: string;
  ngOnInit() {
  }

  onSaveShoes(formShoes: NgForm): void {
    if (formShoes.value.id == null) {
      // New 
      // formShoes.value.userUid = this.userUid;
      this.dataApi.addShoes(formShoes.value);
    } else {
      // Update
      this.dataApi.updateShoes(formShoes.value);
    }
    formShoes.resetForm();
    this.btnClose.nativeElement.click();
  }
}

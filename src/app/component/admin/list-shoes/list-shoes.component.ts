import { Component, OnInit } from '@angular/core';
import { shoesInterface } from './../../../models/shoes';
import { DataApiService } from './../../../services/data-api.service';
import { NgForm}  from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-shoes',
  templateUrl: './list-shoes.component.html',
  styleUrls: ['./list-shoes.component.css']
})
export class ListShoesComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private shoes: shoesInterface[] = [{}] ;
  ngOnInit() {
    this.getListShoes();
  }
  getListShoes(){
    this.dataApi.getAllShoes().subscribe(news => {
      this.shoes = news
    });
  }
  onDeleteShoes(idShoes: string){
    console.log('Delete ');
    const confirmacion = confirm('Are you sure?');
    if(confirmacion){
      this.dataApi.deleteShoes(idShoes);
    }
    
  }
  onPreUpdate(shoes: shoesInterface){
    this.dataApi.selectedShoes = Object.assign({},shoes);
  }

}

import { shoesInterface } from './../../models/shoes';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-shoes',
  templateUrl: './details-shoes.component.html',
  styleUrls: ['./details-shoes.component.css']
})
export class DetailsShoesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public shoes: shoesInterface = {};

  ngOnInit() {
    const idShoes = this.route.snapshot.params['id'];
   this.getDetaills(idShoes);
  }
  getDetaills(idShoes: string): void{
    this.dataApi.getOneNoticia(idShoes).subscribe( shoes =>{
      // console.log('Detail news', news);
      this.shoes = shoes;
    });
  }
}

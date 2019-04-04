import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public shoess = [];
  public shoes = '';
  ngOnInit() {
    this.dataApi.getAllShoes().subscribe(shoess =>{
      console.log('Shoes', shoess);
      this.shoess = shoess;
    });
  }

}

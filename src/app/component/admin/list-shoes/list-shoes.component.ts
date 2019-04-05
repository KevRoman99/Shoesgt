import { auth } from 'firebase/app';
import { UserInterface } from './../../../models/users';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../../services/auth.service';
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

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private shoes: shoesInterface[] = [{}] ;
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListShoes();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.role).hasOwnProperty('admin');
          // this.isAdmin = true
        })
      }
    })
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
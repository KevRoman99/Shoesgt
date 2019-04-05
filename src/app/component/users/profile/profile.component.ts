import { UserInterface } from './../../../models/users';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authservice: AuthService) { }
  user: UserInterface ={
    name: '',
    email: '',
    photoUrl: '',
    role: {}
  };
  public providerId: string = 'null';
  ngOnInit() {
    this.authservice.isAuth().subscribe(user =>{
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId; 
   
      }
    });
  }

}

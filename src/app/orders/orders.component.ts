import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BookAppService } from '../book-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  OrderApiData :any;
  UserId = localStorage.getItem('id');
  UserEmail = localStorage.getItem('email');
  Name = localStorage.getItem('name');
  Role = localStorage.getItem('role');

  constructor(private getData:BookAppService, private router:Router){
    this.getData.getOrder().subscribe(x=>{
      console.log(x)
      this.OrderApiData = x
    })
  }
  Approve(){
    alert("Accept")
  }
  Reject(id:number){
    this.getData.deleteOrderById(id).subscribe(()=>{
      this.getData.getOrder().subscribe(x=>{
        console.log(x)
        this.OrderApiData = x
      })
    });
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['']);
  }

}

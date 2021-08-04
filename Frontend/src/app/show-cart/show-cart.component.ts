import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Globals} from '../globals'
import { CartItem } from '../Cart';
import { from } from 'rxjs';
@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  //globals: Globals;
  cardItems: CartItem[] =[];
  bill : number =0;

  constructor(private router:Router, private gl: Globals) {
    this.cardItems=gl.cartItems;
   }
  
  LoadComponent(CompName : string) : void{
    this.router.navigate([`${CompName}`]);
  }

  ngOnInit(): void {
    this.calculatebill();
    if(this.bill==0)
    {
      var element = <HTMLInputElement> document.getElementById("btn");
    element.disabled = true;
  } 
  }

  removeItem(index: number) {
    var price=this.gl.cartItems[index].Price/this.gl.cartItems[index].Quantity;
    this.gl.cartItems[index].Quantity--;
    this.gl.cartItems[index].Price -= price;
    this.bill=0;
    this.calculatebill();
    if(this.bill==0)
    {
      var element = <HTMLInputElement> document.getElementById("btn");
      element.disabled = true;
  } 
    if(this.gl.cartItems[index].Quantity==0)
    {
      this.gl.cartItems.splice(index,1);
    }
  }

  addItem(index: number) {
    var price=this.gl.cartItems[index].Price/this.gl.cartItems[index].Quantity;
    this.gl.cartItems[index].Quantity++;
    this.gl.cartItems[index].Price += price;
    this.bill=0;
    this.calculatebill();

  }

  calculatebill() {
    this.gl.cartItems.forEach(element => {
      this.bill += element.Price;
    });
  }
}

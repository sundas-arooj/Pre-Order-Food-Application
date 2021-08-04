import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PreorderService } from '../preorder.service';
import { CartItem } from '../Cart';
import { templateJitUrl } from '@angular/compiler';
import {Globals} from '../globals';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu : any = {};

  constructor(private router:Router,
    private route : ActivatedRoute,
    private ps : PreorderService,private gl: Globals) { }
  
  LoadComponent(CompName : string) : void{
    this.router.navigate([`${CompName}`]);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ps.getMenu(params[`id`]).subscribe((res) => {
        this.menu = res;
        if(this.menu.Name!=this.gl.restName && this.gl.restName!="" && this.gl.cartItems[0].ItemName!="")
        {
          alert("By clicking on another restaurant, your previous cart items will be removed.");
          this.gl.cartItems=[];
          console.log(this.gl.cartItems);
        }
      
        this.gl.restName=this.menu.Name;
        this.gl.location=this.menu.Address;
        this.gl.restId=this.menu._id;
        console.log(this.menu._id);
      });
    });

  }
  AddToCart(Name : string,Price : number){
    var foundIndex = this.gl.cartItems.findIndex(x => x.ItemName == Name);
    if(foundIndex==-1){
      var tempobj : CartItem =  {
        "ItemName":Name,
        "Price":Price,
        "Quantity":1
      }
      this.gl.cartItems.push(tempobj);
    }
    else {
      this.gl.cartItems[foundIndex].Quantity++;
      this.gl.cartItems[foundIndex].Price =  this.gl.cartItems[foundIndex].Price*this.gl.cartItems[foundIndex].Quantity;
    }    
  }
}

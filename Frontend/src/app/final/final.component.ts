import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals'
import { CartItem } from '../Cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  global: Globals;
  cardItems: CartItem[] =[];
  bill : number =0;
  custName : string; 

  constructor(private gl : Globals, private route: ActivatedRoute) { 
    this.global = gl;
    this.cardItems=gl.cartItems;
  }

  ngOnInit(): void {
    this.calculatebill();
    this.route.queryParams.subscribe(params => {
        this.custName = params['name'];
      });
  }

  calculatebill() {
    this.gl.cartItems.forEach(element => {
      this.bill += element.Price;
    });
  }
}

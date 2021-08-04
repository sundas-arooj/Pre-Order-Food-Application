import { CartItem } from './Cart'
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    cartItems: CartItem[] =[];
    restName: string="";
    restId: string;
    location: string="";
}


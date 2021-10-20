import { Injectable } from '@angular/core';
import { CartItem } from '../models/cardItem';
import { CartItems } from '../models/cardItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId === product.productId)
    if(item){
      item.quantity+=1; //eğer ürün varsa quantitynin bir artması gerekmektedir.
    }else{
      let cartItem = new CartItem(); //ekleme için bir cartItem eklenmesi gerektiği için.
      cartItem.product = product; 
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }


  list():CartItem[]{
    return CartItems;
  }
}

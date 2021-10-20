import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http' //bunu eklemen gerekiyor.
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // product1 = {
  //   productId: 1,
  //   productName: 'Bardak',
  //   categoryId: 1,
  //   unitPrice: 5
  // };
  // product2 = {
  //   productId: 2,
  //   productName: 'Laptop',
  //   categoryId: 1,
  //   unitPrice: 5,
  // };
  // product3 = {
  //   productId: 3,
  //   productName: 'Mouse',
  //   categoryId: 1,
  //   unitPrice: 5,
  // };
  // product4 = {
  //   productId: 4,
  //   productName: 'Keyboard',
  //   categoryId: 1,
  //   unitPrice: 5,
  // };
  // product5 = {
  //   productId: 5,
  //   productName: 'Camera',
  //   categoryId: 1,
  //   unitPrice: 5,
  // };
  //any görürsen eğer her veri tipi olabilir demektir. {} görürsen object demek
  //burada bulunan her şeyi html tanır unutma!!.



  //burada product arrayi olduğunu belirtmen gerekiyor.
  products:Product[] = [
    // this.product1,
    // this.product2,
    // this.product3,
    // this.product4,
    // this.product5,
  ];
  dataLoaded = false;
  filterText = "";
  //datan varsa bunu componentte tut. html de yönet.

  /*productResponseModel:ProductResponseModel={
    data : this.products,
    message:"",
    success:true
  };*/
  
  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartService) {} 
  //instance üretmek için kullanılır. Birşeyi newlemek denir. Bir konu initialize etmek dışında kullanma yani injection.
  //angular kendi içinde bir injection mekanizması var sen burada httpClient değişkenine HttpClienti newle diyorsun ve onu artık kullanabilir hale geliyorsun. private demek sadece bu class kullanabilir demektir.  eğer private demezsen dışardan kullanan biri bunu public olarak görür ve kullanabilir hale gelir.
  //activatedRoute : mevcut route eğer bir id verildiyse onu okumamızı sağlayan yapıdır. id veriliyorsa kullanman gerekir.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts();
      }
    })
    //eğer observable dönen bir şey görürsen subscribe olması gerekir.
    //this.getProducts();

  } //implements OnInit {buradan geliyor unutma. Sizin componenteniz ilk açıldığında çalışan komutunuzdur.

  
  //javascripte herşey fonksiyon o yüzden javascripte class yok unutma.

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    });
  }


  addToCart(product:Product){
    if(product.productId === 1){
      this.toastrService.error("Bu ürün sepete eklenemez",product.productName);
    }else{
      this.toastrService.success("Sepete eklendi",product.productName);
      this.cartService.addToCart(product);
    }
  }

}

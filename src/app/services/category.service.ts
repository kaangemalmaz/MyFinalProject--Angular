import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44389/api/categories/"
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<ListResponseModel<Category>>{ //=> subscribe olunabilir bir return olacaksın anlamına geliyor observable yani observable sayesinde dönüyor.
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "getall");
  }
    //=> burada gelen datayı productresponseModeline bind edeceksin demektir. httpclientin özelliği bu unutma!!.
    //this.productResponseModel = response;

  
}

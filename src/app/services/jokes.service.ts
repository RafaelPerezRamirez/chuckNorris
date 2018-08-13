import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class JokesService {

  constructor( private http:HttpClient ) { }

  getjokes = ()=>{
      let url = "https://api.chucknorris.io/jokes/categories";
      return this.http.get(url).map( response =>{
          return response;
      })
  }
  getjoke = (category)=>{
      let url = "https://api.chucknorris.io/jokes/random?category="+category;
      return this.http.get(url).map( response =>{
          return response;
      })
  }

}

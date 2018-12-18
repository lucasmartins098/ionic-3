import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseAPI = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('construtor do Movie Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseAPI + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  // getMovieDetalhe(idFilme){
  //   return this.http.get(this.baseAPI + `/movie/${idFilme}?api_key=ff976cfaa506c7fa816e2e1ebe64ff7d`);
  // }

  getMovieDetalhe(idFilme){
    console.log(idFilme);
    return this.http.get(this.baseAPI + `/movie/${idFilme}?api_key=` + this.getApiKey());
}

  getApiKey(): string{

    return "51e4e9d52532d389174b5252cd99d33d";

  }

}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the CadastroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroProvider {
url:string = "";
  constructor(public http: Http) {
  }

    getAll(){
      return this.http.get(this.url).map(res=>res.json());
    }

    Create(name){
      var body={"name":name};
      var header=new Headers({'Content-Type':'aplication/json'});
      var option=new RequestOptions({method:RequestMethod.Post,headers:header});
      return this.http.get(this.url).map(res=>res.json());
    }

    Update(id,name){
      var body={"id":id,"name":name};
      var header=new Headers({'Content-Type':'aplication/json'});
      var option=new RequestOptions({method:RequestMethod.Post,headers:header});
      return this.http.get(this.url).map(res=>res.json());
    }

    Read(id){
      return this.http.get(this.url+id).map(res=>res.json());
    }

    Delete(id){
      return this.http.delete(this.url+id).map(res=>res.json());
    }
    
  }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewCat } from "../model/cat";

@Injectable(
    {providedIn: 'root'}
)
export class CatService{
   
    constructor(private http: HttpClient){}

    //c
    public createCat(newCat: NewCat): Observable<any>{
       return this.http.post("http://localhost:8080/cat", newCat)
    }

    //r
    public getCats(): Observable<any>{
     return this.http.get("http://localhost:8080/cat") // returneaza un observable
    }
}
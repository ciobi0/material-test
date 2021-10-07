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
       return this.http.post("https://enuxai24hrxjpr9.m.pipedream.net/cat", newCat)
    }

    //r
    public getCats(): Observable<any>{
     return this.http.get("https://enuxai24hrxjpr9.m.pipedream.net/cats") // returneaza un observable
    }
}
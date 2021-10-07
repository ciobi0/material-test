import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../model/cat';
import { CatService } from '../service/cat-service';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.css']
})
export class CatProfileComponent implements OnInit {

  id: number = -1
  cats: Array<Cat> = []
  cat: Cat = {name:"",breed:"",likes: 0, id:1}
  constructor(private activatedRoute: ActivatedRoute,
    private catService: CatService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"] as number
    this.catService.getCats().subscribe(
      response =>{
        this.cats = response
        this.cats.find( c=>{
          if(c.id == this.id){
            return true
          } else{
            return false
          }
        })
      }
    )
  }

}

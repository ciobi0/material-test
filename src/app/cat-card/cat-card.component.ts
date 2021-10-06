import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../model/cat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  @Input("cat")
 cat:Cat = {id: 0, name: "", breed: "", likes: 0}
  constructor() { }

  ngOnInit(): void {
  }

  increaseLikes(){
    this.cat.likes ++
  }

  decreaseLikes(){
    this.cat.likes --
  }
}

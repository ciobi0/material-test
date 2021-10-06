import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalData } from 'src/app/model/local-data';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats = LocalData.localCats

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // rutare in interiorul aplicatiei
  redirectToNewForm(){
    this.router.navigate(["new-cat"])
  }

}

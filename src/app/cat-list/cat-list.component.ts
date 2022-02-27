import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalData } from 'src/app/model/local-data';
import { Cat } from '../model/cat';
import { CatService } from '../service/cat-service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  // cats = LocalData.localCats
cats: Array<Cat> = []
  

  constructor(private router: Router, private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe(
      successfullresponse => {
        this.cats = successfullresponse
      },
      errorResponse => {alert(errorResponse + " no cats from server")}
    )
  }

  // rutare in interiorul aplicatiei
  redirectToNewForm(){
    this.router.navigate(["new-cat"])
  }

}

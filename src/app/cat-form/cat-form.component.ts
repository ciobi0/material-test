import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatListComponent } from '../cat-list/cat-list.component';
import { NewCat, Cat } from '../model/cat';
import { LocalData } from '../model/local-data';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  newCat: NewCat = {name:"", breed:"", description:"", likes:0}

  // form control for name
  catNameFormControl = new FormControl("", Validators.required)
  // form control for breed
  catBreedFormControl = new FormControl()
  // form control for description
  catDescriptionFormControl = new FormControl()
  // form control for likes
  catLikesFormControl = new FormControl()
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveCat(){
    if(!this.catNameFormControl.valid){
      alert("form not valid!")
    }
    this.newCat.name = this.catNameFormControl.value

    this.newCat.breed = this.catBreedFormControl.value
  
    this.newCat.description = this.catDescriptionFormControl.value

    this.newCat.likes = this.catLikesFormControl.value
    console.log(this.newCat)

    var cat = this.newCat as Cat
    cat.id = LocalData.localCats.length
    LocalData.localCats.push(cat)
    this.router.navigate(["cats"])
  }

}

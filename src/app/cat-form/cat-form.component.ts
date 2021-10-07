import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatListComponent } from '../cat-list/cat-list.component';
import { NewCat, Cat } from '../model/cat';
import { LocalData } from '../model/local-data';
import { CatService } from '../service/cat-service';

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
  // form control for image
  catImageFormControl = new FormControl()
  
  constructor(private router: Router,
    private catService:CatService) { }

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
    
    this.newCat.image = this.catImageFormControl.value
    
    console.log(this.newCat)

    // var cat = this.newCat as Cat
    // cat.id = LocalData.localCats.length
    // LocalData.localCats.push(cat)
   // this.router.navigate(["cats"])
   console.log(LocalData.localCats)
   this.catService.createCat(this.newCat).subscribe(
     successfullResponse =>{
       this.router.navigate(["cats"])
     },
     error => alert("could not save cat")
   )
  }

}

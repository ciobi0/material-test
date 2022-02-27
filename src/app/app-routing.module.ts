import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFormComponent } from './cat-form/cat-form.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';

const routes: Routes = [
  {path: "cat", component: CatListComponent},
  {path: "new-cat", component: CatFormComponent},
  {path: "cats/:id", component: CatProfileComponent},
  {path: "", redirectTo: "cat", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

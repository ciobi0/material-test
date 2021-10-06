import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFormComponent } from './cat-form/cat-form.component';
import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  {path: "cats", component: CatListComponent},
  {path: "new-cat", component: CatFormComponent},
  {path: "", redirectTo: "cats", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

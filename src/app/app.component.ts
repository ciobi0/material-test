import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-test';

  cats: Array<string>=["puffy","fliffy","bessy","nukey", "polly", "bibi"]
}

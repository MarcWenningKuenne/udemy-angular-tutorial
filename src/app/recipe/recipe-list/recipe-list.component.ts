import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Dummy', 'Dummy', 'https://media.fortniteapi.io/images/51d30a24ab77d09644e0db6a9ea14ddc/transparent.png')
  constructor() { }

  ngOnInit(): void {
  }

}

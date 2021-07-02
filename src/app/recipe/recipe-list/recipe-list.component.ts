import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Sehr lecker', 'https://www.gutekueche.at/storage/media/recipe/8028/conv/wiener-schnitzel-default.jpg',
    [
      new Ingredient('Pommes', 10),
      new Ingredient('Schnitzel', 1)
    ] ),
    new Recipe('Salat', 'auch lecker', 'https://images.lecker.de/,id=4dba2952,b=lecker,w=610,cg=c.jpg', [])
  ] 
  @Output() recipeSelected = new EventEmitter<Recipe>();
  selectedRecipe!: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Sehr lecker', 'https://www.gutekueche.at/storage/media/recipe/8028/conv/wiener-schnitzel-default.jpg',
        [
          new Ingredient('Pommes', 10),
          new Ingredient('Schnitzel', 1)
        ] ),
        new Recipe('Salat', 'auch lecker', 'https://images.lecker.de/,id=4dba2952,b=lecker,w=610,cg=c.jpg', 
        [

        ])
    ]
    
    getRecipes(){
        return this.recipes;
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    deleteRecipe(id: number){
        this.recipes.splice(id, 1);
    }
}
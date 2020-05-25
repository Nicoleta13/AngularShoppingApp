import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is the description', 
    'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
  
    new Recipe('Recipe 2', 'This is the description2', 
    'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

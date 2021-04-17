import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Steak',
      'Special Grilled Steak',
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?cs=srgb&dl=pexels-kasumi-loffler-3535383.jpg&fm=jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

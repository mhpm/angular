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
      'Sirloin',
      'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting',
      'https://source.unsplash.com/random?steak'
    ),
    new Recipe(
      'T-Bone',
      'Special Grilled Steak What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting',
      'https://source.unsplash.com/random?steak'
    ),
    new Recipe(
      'RibEye',
      'Special Grilled Steak What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting',
      'https://source.unsplash.com/random?steak'
    ),
    new Recipe(
      'Toma Hawk',
      'Special Grilled Steak What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting',
      'https://source.unsplash.com/random?steak'
    ),
    new Recipe(
      'Mignon',
      'Special Grilled Steak What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting',
      'https://source.unsplash.com/random?steak'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

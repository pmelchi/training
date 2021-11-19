import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pizza', 'a basic recipe for pizza', 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/05/dr8emp.jpg'),
    new Recipe('pizza', 'a basic recipe for pizza', 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/05/dr8emp.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

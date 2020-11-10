import { Component, OnInit } from '@angular/core';
import {Ingredient } from '../shared/ingredient.mode';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('kiselo zele', 10),
    new Ingredient('svinski ezik', 2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

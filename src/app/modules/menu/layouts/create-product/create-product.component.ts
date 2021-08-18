import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public ingredientInput: string = '';
  public ingredients: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNewIngredient() {
    if (this.ingredientInput.trim().length == 0) return;
    this.ingredients.push(this.ingredientInput.trim());
    this.ingredientInput = '';
  }
  removeIngredient(ingredientIndex: number) {
    this.ingredients = this.ingredients.filter(
      (_, index) => index != ingredientIndex
    );
  }
}

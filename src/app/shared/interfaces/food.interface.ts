export interface IFood {
  id: number;
  foodName: string;
  imageUrl: string;
  price: number;
  discount: number;
  category: IFoodCategory;
}

export interface IFoodDetails extends IFood {
  description: string;
  ingredients: IIngredient[];
  isAvailable: boolean;
}

export interface IFoodCategory {
  id: number;
  name: string;
}

export interface IIngredient {
  id: number;
  name: string;
}

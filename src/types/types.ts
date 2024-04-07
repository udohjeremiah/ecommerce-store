export interface Billboard {
  id: string;
  label: string;
  imagePublicId: string;
}

export interface Category {
  id: string;
  name: string;
  Billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  isFeatured: boolean;
  Category: Category;
  Size: Size;
  Color: Color;
  Image: Image[];
}

export interface Image {
  id: string;
  imagePublicId: string;
}

export interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

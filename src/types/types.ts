export interface Billboard {
  id: string;
  label: string;
  imagePublicId: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

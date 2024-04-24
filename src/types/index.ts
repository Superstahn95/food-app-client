export type TCategory = {
  meals: TMeal[];
  _id: string;
  name: string;
};

export type TMeal = {
  _id: string;
  category: string;
  cloudinary_id: string;
  createdAt: string;
  description: string;
  mealImage: string;
  name: string;
  price: number;
};

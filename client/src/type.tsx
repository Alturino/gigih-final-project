export type Video = {
  _id: string;
  urlImage: string;
  thumbnail: string;
  title: string;
  comments: Comment[];
  products: Product[];
  viewCount: number;
};

export type Chip = {
  id: string;
  title: string;
};

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
};

export type Comment = {
  id: string;
  username: string;
  content: string;
};

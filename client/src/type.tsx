export type Video = {
  _id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  viewCount: number;
  comments: Comment[];
  products: Product[];
};

export type Chip = {
  id: string;
  title: string;
};

export type Product = {
  _id: string;
  videoId: string;
  image: string;
  linkProduct: string;
  description: string;
  title: string;
  price: number;
};

export type Comment = {
  _id: string;
  videoId: string;
  username: string;
  comment: string;
};

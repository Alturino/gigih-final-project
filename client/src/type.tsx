export type Video = {
  id: string;
  title: string;
  seller: string;
  urlImage: string;
  thumbnail: string;
  viewCount: number;
  videoUrl: string;
  comments: string[];
  products: string[];
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

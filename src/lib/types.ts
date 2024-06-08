export interface Article {
  _id: string;
  title: string;
  description: string;
  userId: string;
  location: {
    type: string;
    coordinates: number[];
  };
  photos: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  location: string;
}

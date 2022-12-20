export type CurrentUser = {
  image: string;
  name: string;
  username: string;
};

export type User = {
  image: string;
  name: string;
  username: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

export type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

export type Product = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  isUpvoted: boolean;
  status: string;
  description: string;
  comments?: Comment[];
};

export class Post {
  id: number;
  user_id: number;
  title: string;
  message: string;
  created_at: Date;
  answers?: Comment[];
  constructor(obj) {
    Object.assign(this, obj);
  }
}

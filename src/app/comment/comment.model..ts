export class Comment {
  id: number;
  post_id: number;
  user_id: number;
  message: string;
  created_at: Date;
  constructor(obj) {
    Object.assign(this, obj);
  }
}

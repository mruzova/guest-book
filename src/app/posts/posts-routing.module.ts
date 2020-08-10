import { PostsComponent } from '../posts/posts.component';
import { AuthGuard } from '../auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const postRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}

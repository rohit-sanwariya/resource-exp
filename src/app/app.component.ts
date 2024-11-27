import { Component, computed, inject, resource } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './Services/post.service';
import { firstValueFrom } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { ChildComponentComponent } from './Components/child-component/child-component.component';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  _postService = inject(PostService);
  posts = resource({
    loader: () => {
      return firstValueFrom(this._postService.getPosts());
    },
  });
  modified = computed(() => {
    return this.posts
      .value()
      ?.map((item) => ({ ...item, additionalKey: false }));
  });

  refresh(): void {
    this.posts.reload();
  }
}
